import Home from './components/Home/Home';
import './App.css';
import Signin from './components/Signin/Signin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/register/register';
import Details from './components/details/details';
import Product from './components/product/product';
import Mycart from './components/mycart/mycart';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"details",
        element: <Details/>
      },
      {
        path:"product/:id",
        element:<Product/>
      },
      {
        path:"mycart",
        element:<Mycart/>
      }
    ]
  },
  {
    path:"signin",
    element:<Signin/>,
  },
  {
    path:"register",
    element:<Register/>
  }
])

function App() {
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
