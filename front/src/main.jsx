import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserProfile from './container/UserProfile'
import Feed from './container/Feed'
import LeaderBoard from './container/LeaderBoard'
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
    path: '/app',
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
