import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ThreadDetail() {
  const { thread_id } = useParams();
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [threadTitle, setThreadTitle] = useState('');

  // 投稿一覧を取得する関数
  const fetchPosts = () => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log("取得した投稿データ", data);
        setPosts(data.posts);
      })
      .catch((err) => console.error('エラー:', err));
  };


  useEffect(() => {
    fetchPosts();

 
    fetch(`https://railway.bulletinboard.techtrain.dev/threads`)
      .then((res) => res.json())
      .then((data) => {
        const matchedThread = data.find(thread => thread.id === thread_id);
        if (matchedThread) {
          setThreadTitle(matchedThread.title);
        } else {
          console.warn("スレッドが見つかりません");
        }
      })
      .catch((err) => console.error('スレッドタイトル取得エラー:', err));
  }, [thread_id]);


  // 投稿送信処理
  const handlePostSubmit = () => {
    if (postText.trim() === '') return;

    const postData = {
      post: postText,
      user_id: 'dummy-user-id',
    };

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("投稿後レスポンス", data);
        setPostText('');
        fetchPosts();
      })
      .catch((err) => console.error('投稿エラー:', err));
  };

  return (
    <div>


      {threadTitle && (
        <p>▶ 選択中のスレッド：{threadTitle}</p>
      )}

      <h2>スレッド内の投稿一覧</h2>
      <ul>
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <p>{post.post}</p>
            </li>
          ))
        ) : (
          <p>投稿が見つかりません</p>
        )}
      </ul>

      <h3>投稿フォーム</h3>
      <input
        type="text"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="投稿内容を入力"
      />
      <button onClick={handlePostSubmit}>投稿する</button>
    </div>
  );
}

export default ThreadDetail;

