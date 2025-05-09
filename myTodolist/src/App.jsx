import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [edit, setedit] = useState(null);

  // Add or Update Task
  const handleAddOrUpdate = (e) => {
    e.preventDefault(); // Prevent page reload


    if (edit !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[edit].name = task;
      setTasks(updatedTasks);
      setedit(null);
    } else {
      const newTask = {
        id: Date.now(),
        name: task
      };
      setTasks([...tasks, newTask]);
    }

    setTask('');
  };

  // Edit Task
  const handleEdit = (index) => {
    setTask(tasks[index].name);
    setedit(index);
  };

  // Delete Task
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{
      padding: '30px',
      maxWidth: '600px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center' }}>To-Do List</h2>

      {/* Task Input Form */}
      <form onSubmit={handleAddOrUpdate} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={{ width: '70%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: edit !== null ? '#f0ad4e' : '#5cb85c',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          {edit !== null ? 'Update' : 'Add'}
        </button>
      </form>

      {/* Tasks Table */}
      {tasks.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Task</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr key={t.id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{t.name}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{ marginRight: '10px', padding: '4px 8px' }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}  style={{
                      padding: '4px 8px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet.</p>
      )}
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '10px',
  borderBottom: '2px solid #ddd'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee'
};

export default App;
