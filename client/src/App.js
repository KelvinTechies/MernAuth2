import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Username from './Components/Username/Username';
import Password from './Components/Password/Password';
import Register from './Components/Register/Register';
import Recovery from './Components/Recovery/Recovery';
import Reset from './Components/Reset/Reset';
import Profile from './Components/Profile/Profile';
import PageNotFound from './Components/PageNotFound';




const router = createBrowserRouter([
  {
    path:'/',
    element:<Username />
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/Password',
    element:<Password/>
  },
  {
    path:'/Recovery',
    element:<Recovery/>
  },
  {
    path:'/Reset',
    element:<Reset/>
  },
  {
    path:'/Profile',
    element:<Profile/>
  },
  {
    path:'*',
    element:<PageNotFound/>
  }
])


function App() {
  return (
    <main>
    <RouterProvider router={router}></RouterProvider>
      </main>
  );
}

export default App;
