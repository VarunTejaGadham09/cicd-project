import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('API error:', err);
        setMessage('Failed to load API');
      });
  }, []);

  return (
    <div>
      <h1>CI/CD Project</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;