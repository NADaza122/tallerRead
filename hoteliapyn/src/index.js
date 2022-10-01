import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Form from './pages/form/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
              <Routes>
                  <Route path='/Login' element={<Login />}/>
                  <Route path='/Dashboard' element={<Dashboard />}/>
                  <Route path='/' element={<Home />}/>
                  <Route path='/Form' element={<Form />}/>
              </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
  

);

/*const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
