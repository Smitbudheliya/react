import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-bg d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-white mb-4 fw-bold">🎯 Stylish Counter App</h1>

      <div className="card counter-card text-center shadow-lg p-4">
        <h2 className="display-3 text-dark">{count}</h2>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <button className="btn btn-success px-4" onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>
          <button
            className="btn btn-danger px-4"
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
          >
            ➖ Decrement
          </button>
          <button className="btn btn-warning px-4 text-white" onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
