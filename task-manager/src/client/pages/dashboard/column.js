import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '@redux/actions/taskActions';

const columns = () => {
  const dispatch = useDispatch();

  const handleToggle = (id, currentStatus) => {
    const updatedStatus = !currentStatus;
     console.log(id,"-------",currentStatus)
    // Dispatch to Redux
    dispatch(updateTaskStatus(id, updatedStatus));
  };

  return [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'User',
      accessor: 'userName',
    },
    {
      Header: 'Status',
      accessor: 'completed',
      Cell: ({ row, value }) => {
        const { id } = row.original;

        return value ? (
          <i
            className="bi bi-check-circle-fill text-success"
            title="Completed"
            style={{ fontSize: '1.3rem', cursor: 'pointer' }}
            onClick={() => handleToggle(id, value)}
          />
        ) : (
          <i
            className="bi bi-x-circle-fill text-danger"
            title="Pending"
            style={{ fontSize: '1.3rem', cursor: 'pointer' }}
            onClick={() => handleToggle(id, value)}
          />
        );
      },
      disableSortBy: true,
    },
  ];
};

export default columns;
