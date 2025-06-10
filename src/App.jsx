// station3,4,5の修正コード
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ThreadList from './pages/ThreadList';
import NewThread from './pages/NewThread';
import ThreadDetail from './pages/ThreadDetail';
// トップページ以外に表示させるようにしたコード
function NavigationLinks() {
  const location = useLocation();
  if (location.pathname === '/')
    return (
      <nav>
        <h2>新着情報</h2>
        <Link to="/threads/new">新規作成</Link>
      </nav>
    )
  return null;
}
function App() {
  return (
  
    <Router>
      <div className="container">
        <h1>掲示板アプリ</h1>
        <NavigationLinks />
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
// // station2について
// import './App.css';
// import ThreadList from './pages/ThreadList';

// function App() {
//   return (
//     <div className="container">
//       <h1>掲示板アプリ</h1>
//       <h2>新着情報!!</h2>
//       <ThreadList />
//     </div>
//   );
// }

// export default App;
