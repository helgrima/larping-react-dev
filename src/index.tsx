import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import LRDApp from 'LRDApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DogShowContainer } from 'functionalities/DogShowContainer';
import { Components } from 'functionalities/Components';
import { Dashboard } from 'functionalities/Dashboard';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LRDApp />}>
          <Route path="dogs" element={<DogShowContainer />} />
          <Route path="components" element={<Components />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
