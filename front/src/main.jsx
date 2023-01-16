import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BlogPost from './container/BlogPost'
import Login from './container/Login'
import Signup from './container/Signup'
import Error from './container/Error'
import UserProfile from './container/UserProfile'
import Feed from './container/Feed'
import LeaderBoard from './container/LeaderBoard'
import Loginsignup from "./container/LoginSignup"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: '/profile',
    element: <UserProfile />
  },
  {
    path: '/leaderboard',
    element: <LeaderBoard />
  },
  {
    path: '/blog',
    element: <BlogPost />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/app',
    element: <App />
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
