import { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('none');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    const newTaskObj = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'date') return new Date(a.createdAt) - new Date(b.createdAt);
    if (sort === 'alphabetical') return a.text.localeCompare(b.text);
    return 0;
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 border bg-black text-white rounded-r-md hover:bg-white hover:text-black hover:border-b-black transition-colors"
        >
          Add
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <span className="mr-2 text-gray-700">Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <span className="mr-2 text-gray-700">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md"
          >
            <option value="none">None</option>
            <option value="date">Date</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <ul className="space-y-2">
        {sortedTasks.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No tasks found</li>
        ) : (
          sortedTasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 border rounded-md ${task.completed ? 'bg-gray-50 border-gray-200' : 'border-gray-300'}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
                />
                <span
                  className={`ml-3 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {tasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          {tasks.filter(t => !t.completed).length} tasks remaining
        </div>
      )}
    </div>
  );
};

export default TodoList;