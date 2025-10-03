import React, { useState } from 'react';

// Simple Student Card
function StudentCard({ name, roll, course }) {
  return (
    <div className="border-2 border-blue-400 rounded p-4 bg-white">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-700">Roll: {roll}</p>
      <p className="text-gray-600">{course}</p>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const students = [
    { id: 1, name: "ANUJ", roll: "001", course: "Computer Science" },
    { id: 2, name: "SHWETA", roll: "002", course: "Information Tech" },
    { id: 3, name: "ABHI", roll: "003", course: "Mechanical" },
    { id: 4, name: "LARA", roll: "004", course: "Electronics" }
  ];

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      
      {/* TODO LIST */}
      <div className="max-w-2xl mx-auto mb-8 p-6 bg-white rounded border-2 border-blue-400">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Todo List</h1>
        
        <div className="flex gap-2 mb-4">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add task..."
            className="flex-1 border-2 border-gray-300 rounded px-3 py-2"
          />
          <button 
            onClick={addTask}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded border">
              <input 
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="mr-3"
              />
              <span className={`flex-1 ${task.done ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </span>
              <button 
                onClick={() => deleteTask(task.id)}
                className="text-red-500 px-3"
              >
                Delete
              </button>
            </div>
          ))}
          {tasks.length === 0 && <p className="text-gray-500 text-center py-4">No tasks</p>}
        </div>
      </div>

      {/* STUDENT CARDS */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded border-2 border-blue-400">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Student Cards</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {students.map(student => (
            <StudentCard 
              key={student.id}
              name={student.name}
              roll={student.roll}
              course={student.course}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
