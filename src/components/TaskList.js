import React from 'react';
import { motion } from 'framer-motion';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <motion.li
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex justify-between p-2 border border-gray-300 rounded"
        >
          <span className="flex-1">
            {task.title} - <span className="font-semibold">{task.priority} Priority</span>
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

export default TaskList;

