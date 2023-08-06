import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { routes, IRoute } from './utils/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route: IRoute, idx) => (
            <React.Fragment key={idx}>
              <Route element={route.element} path={route.path} />
            </React.Fragment>
          ))}
          <Route
            element={<h1 className="flex items-center justify-center text-2xl">404 Page Not Found!</h1>}
            path="*"
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
