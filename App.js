import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.ok) {
      setMessage(`Bienvenido ${data.name}`);
    } else {
      setMessage(data.message);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Login demo</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <label htmlFor="password">Contraseña</label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{ marginTop: 16 }} type="submit">
          Entrar
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;