import { useEffect, useState } from 'react';   
import { Link } from 'react-router-dom'
function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then((res) => res.json())
      .then((data) => {
        setThreads(data);
      })
      .catch((err) => {
        console.error('取得エラー:', err);
      });
  }, []);

  return (
    <div>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
export default ThreadList;
