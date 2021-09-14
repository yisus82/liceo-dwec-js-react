import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetails from "./components/PostDetails/PostDetails";
import Posts from './components/Posts';
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

const App = () => (
  <Router>
    <Header />
    <Navbar />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/posts/:postId">
        <PostDetails />
      </Route>
      <Route path="/users/:userId">
        <UserDetails />
      </Route>
      <Redirect to="/home" />
    </Switch>
    <Footer />
  </Router>
);

export default App;
