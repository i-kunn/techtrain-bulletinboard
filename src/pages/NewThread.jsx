  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
function NewThread() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('スレッド作成成功:', data);
        navigate('/');  
      })
      .catch((err) => {
        console.error('作成エラー:', err);
      });
  };

  return (
    <div>
      <h2>スレッド新規作成</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="スレッドタイトル入力"
      />
      <button onClick={handleSubmit}>作成</button>
    </div>
  );
}

export default NewThread;
