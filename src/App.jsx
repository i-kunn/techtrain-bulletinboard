import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ThreadList from './pages/ThreadList';
import NewThread from './pages/NewThread';
import ThreadDetail from './pages/ThreadDetail';
import { use } from 'react';
// トップページ以外に表示させるようにしたコード
function NavigationLinks() {
  const location = useLocation();
  if (location.pathname === '/')
    return (
      <nav>
        <Link to="/">スレッド一覧</Link>|
        <Link to="/threads/new">新規作成</Link>|
        <Link to="/threads/:thread_id">投稿一覧画面へ進む</Link>
      </nav>
    )
  return null;
}
function App() {
  return (
    <Router>
      <div>
        <h1>掲示板アプリ</h1>
        <NavigationLinks/>
        <Routes>
          <Route path='/' element={<ThreadList />} />
          <Route path='/threads/new' element={<NewThread />} />
          <Route path="/threads/:thread_id" element={<ThreadDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;