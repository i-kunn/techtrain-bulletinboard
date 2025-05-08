
import { useEffect, useState } from 'react'
function App() {
  const [threads, setthreads] = useState([]);
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then((res) => res.json())
      .then((data) => {
        setthreads(data);
      })
      .catch((err) => {
        console.error('取得エラー:', err)
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