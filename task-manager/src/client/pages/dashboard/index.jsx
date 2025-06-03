import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask } from "@redux/actions/taskActions";
import { fetchUsers } from "@redux/actions/userActions";
import Table from "@components/table";
import AddTaskModal from "@components/modal";
import columns from "./column";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { allTask: tasks, loading: taskLoading } = useSelector(
    (state) => state.tasks
  );
  const { allUsers: users, loading: userLoading } = useSelector(
    (state) => state.users
  );
  const { status, userId } = useSelector((state) => state.filters);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch tasks and users on mount
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchUsers());
  }, [dispatch]);

  // Create a map of userId → userName for quick lookup
  const userIdNameMap = useMemo(() => {
    const map = {};
    users.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, [users]);

  const getUserName = (id) => userIdNameMap[id] || "Unknown";

  // Filter and map tasks
  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        const statusMatch =
          status === "all" ||
          (status === "completed" ? task.completed : !task.completed);
        const userMatch = userId ? task.userId === userId : true;
        const userName = getUserName(task.userId).toLowerCase();
        const title = task.title.toLowerCase();
        const searchMatch =
          userName.includes(searchTerm.toLowerCase()) ||
          title.includes(searchTerm.toLowerCase());
        return statusMatch && userMatch && searchMatch;
      })
      .map((task) => ({
        ...task,
        userName: getUserName(task.userId),
      }));
  }, [tasks, status, userId, userIdNameMap, searchTerm]);

  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (newTask) => {
    // Make sure newTask has a valid userId matching one from users
    if (!newTask.userId || !userIdNameMap[newTask.userId]) {
      alert("Please select a valid user for the task.");
      return;
    }
    dispatch(addTask(newTask));
    setIsModalOpen(false);
  };

  if (taskLoading || userLoading) return <p>Loading...</p>;

  return (
    <div className="table-wrapper p-4">
      <div className="search-container mb-4 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search by title or user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleAddTaskClick} className="btn btn-primary">
          Add Task
        </button>
      </div>

      <Table columns={columns()} data={filteredTasks} />

      {isModalOpen && (
        <AddTaskModal
          users={users}
          onClose={handleModalClose}
          onAdd={handleAddTask}
        />
      )}
    </div>
  );
};

export default Dashboard;
