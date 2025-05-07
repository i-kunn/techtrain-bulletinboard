import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios.get('https://railway.bulletinboard.techtrain.dev/threads')
      .then((res) => {
        setThreads(res.data);
      })
      .catch((err) => {
        console.error('取得エラー:', err);
      });
  }, []);

  return (
    <div>
      <h1>掲示板アプリ</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
