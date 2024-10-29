import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div id='error'>
    <h1>404</h1>
    <p>Page not found</p>
    <NavLink to='/'>Go back to the main page</NavLink>
  </div>
);

export default NotFoundPage;
