import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetails from './components/PostDetails';
import Posts from './components/Posts';
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/users/:userId' element={<UserDetails />} />
        <Route path='/posts/:postId' element={<PostDetails />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
