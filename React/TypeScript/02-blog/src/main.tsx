import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './routes/Home';
import PostDetailsPage from './routes/PostDetails';
import PostsPage from './routes/Posts';
import RegisterPage from './routes/Register';
import Root from './routes/Root';
import UserDetailsPage from './routes/UserDetails';
import UsersPage from './routes/Users';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
        loader: HomePage.loader,
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <UsersPage />,
            loader: UsersPage.loader,
          },
          {
            path: ':userId',
            element: <UserDetailsPage />,
            loader: UserDetailsPage.loader,
          },
        ],
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <PostsPage />,
            loader: PostsPage.loader,
          },
          {
            path: ':postId',
            element: <PostDetailsPage />,
            loader: PostDetailsPage.loader,
          },
        ],
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: RegisterPage.action,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
