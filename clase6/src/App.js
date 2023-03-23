import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';
import ProfilePage from './pages/ProfilePage';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  const {user} = useSelector((state)=> state.AuthReducer)
  return (
    <div className="App">
       <NavigationComponent></NavigationComponent>
       <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/posts" element={<PostsPage/>}></Route>
          <Route exact path="/about" element={<AboutPage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
          <Route exact path="/post/:id" element={<SinglePostPage/>}></Route>
          <Route exact path="/profile" element={user && user.id?<ProfilePage/>: <Navigate to="/login" replace></Navigate>}></Route>
       </Routes>
    </div>
  );
}

export default App;
