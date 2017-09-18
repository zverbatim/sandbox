import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route}  from "react-router-dom";
import v4 from 'uuid'


const data = {
  invoice: [
    {
      id: '1',
      title: 'foo',
      value: `$ ${Math.round(Math.random() * 1000)}.00`
    },
    {
      id: '2',
      title: 'bar',
      value: `$ ${Math.round(Math.random() * 1000)}.00`
    }
  ]
}


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
      {' | '}
      <Link to="/invoice">Invoices</Link>
      <hr/>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/invoice" component={InvoiceLayout}/>
    </div>
  </div>
)


const Dashboard = () => (
  <div>...this is a dashboard</div>
)

const InvoiceLayout = () => (
  <div>
    <h3>Invoices</h3>
    <InvoiceNav {...data}/>

    <Route path="/invoice/:id" component={InvoiceDetail}/>
  </div>
)

const InvoiceNav = (props) => (
  <ul>
    {
      props.invoice.map(it =>
        <li key={v4()}>
          <Link to={`/invoice/${it.id}`}>
            invoice {it.id}
          </Link>
        </li>)
    }
  </ul>
)

const InvoiceDetail = ({match}) => {
  const invoice = data['invoice'].filter(it => it.id === match.params.id)[0]
  return (
    <nav>
      <h3>Invoice for company <em>{invoice.title}</em></h3>
      <p>{invoice.value}</p>
    </nav>
  )
}


export default App;
