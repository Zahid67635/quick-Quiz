import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Stats from './components/Stats/Stats';
import Quizes from './components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>

        },
        {
          path: '/stats',
          element: <Stats></Stats>
        },
        {
          path: '/quizes',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`)
          },
          element: <Quizes></Quizes>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
