import React, { useEffect, useState } from 'react';

const Webserise = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/series')
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (loading) return <p>Loading series...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {series.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            width: '200px',
            padding: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <img
            src={item.poster}
            alt={item.title}
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '6px' }}
          />
          <h3>{item.title}</h3>
          <p><strong>⭐ {item.rating}</strong></p>
          <p style={{ fontSize: '0.9em' }}>{item.platform}</p>
        </div>
      ))}
    </div>
  );
};

export default Webserise;
