import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route}  from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
      <InvoiceApp/>
    </BrowserRouter>
  </div>
)

const InvoiceApp = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)


const Dashboard = () => (
  <div>...this is a dashboard</div>
)

const Invoice = () => (
  <div>... this is an invoice</div>
)
export default App;
