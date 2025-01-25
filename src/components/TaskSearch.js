import React from 'react';

const TaskSearch = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
};

export default TaskSearch;
