import { NavLink } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => (
  <div id='error'>
    <h1>ERROR</h1>
    <p>There was an unexpected error. Please try again later.</p>
    <NavLink to='/'>Go back to the main page</NavLink>
  </div>
);

export default ErrorPage;
