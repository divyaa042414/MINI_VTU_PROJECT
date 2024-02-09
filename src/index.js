import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import ResultLoginPage from './Screens/ResultLoginPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index = {HomeScreen} path='/' element={<HomeScreen/>} />
      <Route  path = '/about' element={<AboutUs/>} />
      <Route  path = '/results' element={<ResultLoginPage/>} />
      


    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
