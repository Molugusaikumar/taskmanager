import React, { useState, useEffect } from 'react';
import TaskInput from './components/Taskinput';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskSearch setSearchTerm={setSearchTerm} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
