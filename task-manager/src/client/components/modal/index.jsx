import React, { useState } from "react";

const AddTaskModal = ({ users, onClose, onAdd }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSubmit = () => {
    if (!newTaskTitle.trim() || !selectedUserId) {
      alert("Please enter task title and select a user.");
      return;
    }
    onAdd({
      id: Date.now(),
      title: newTaskTitle,
      userId: selectedUserId,
      completed: false,
    });
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <h2 className="modalHeader">Add New Task</h2>

        <div className="formGroup">
          <label>Task Title</label>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task title"
          />
        </div>

        <div className="formGroup">
          <label>Assign to User</label>
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">Select user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="modalActions">
          <button className="cancel" onClick={onClose} type="button">
            Cancel
          </button>
          <button className="add" onClick={handleSubmit} type="button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
