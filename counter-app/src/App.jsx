import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-bg d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-white mb-5 fw-bold display-4 glow-text">🎯Counter App</h1>

      <div className="counter-card glassmorphism text-center p-5 rounded-4 shadow-lg">
        <h2 className="display-1 fw-bold text-dark">{count}</h2>
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
         

          {/* Increment and Decrement Side-by-Side */}
          <div className="d-flex gap-3">
            <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold" onClick={() => setCount(count + 1)}>
              ➕ 
            </button>
            <button
              className="btn btn-danger px-4 py-2 rounded-pill fw-semibold"
              onClick={() => count > 0 && setCount(count - 1)}
            >
              ➖ 
            </button>
             {/* Reset Button on top */}
          <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold" onClick={() => setCount(0)}>
            🔄
          </button>
          </div>
        </div>




      </div>
    </div>




  );
}

export default App;
