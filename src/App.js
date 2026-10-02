import React, { useState } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleCall() {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`${BACKEND_URL}/health`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '80px auto', textAlign: 'center' }}>
      <h1>tc4-frontend</h1>
      <p style={{ color: '#555' }}>Backend: <code>{BACKEND_URL || '(not set)'}</code></p>
      <button
        onClick={handleCall}
        disabled={loading}
        style={{ padding: '12px 28px', fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Calling…' : 'Call Backend'}
      </button>
      {result && (
        <pre style={{ marginTop: 24, background: '#f4f4f4', padding: 16, textAlign: 'left', borderRadius: 6 }}>
          {result}
        </pre>
      )}
      {error && (
        <p style={{ marginTop: 24, color: 'red' }}>Error: {error}</p>
      )}
    </div>
  );
}
