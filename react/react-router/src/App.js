import React from 'react';
import './App.css';
import {BrowserRouter, Link, Redirect, Route}  from "react-router-dom";
import Media from 'react-media'
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
    <Media query="(max-width: 599px)">
      {matches => matches ? (
        <div>
          <p>The document is less than 600px wide.</p>
          <Route path="/invoice/:id" component={InvoiceDetail}/>
        </div>
      ) : (
        <div>
          <p>The document is at least 600px wide. Will display the dashboard also</p>
          <Route path="/invoice/:id" component={InvoiceDetail}/>
          <Redirect from="/invoice" to="/invoice/dashboard/"/>
        </div>
      )}
    </Media>


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

const InvoiceDashboard = () => <p> this is a invoice dashboard</p>

const InvoiceDetail = ({match}) => {
  const p = match.params.id
  if (p === 'dashboard') {
    return (<InvoiceDashboard/>)
  } else {
    const invoice = data['invoice'].filter(it => it.id === match.params.id)[0]
    return (
      <div>{
        invoice && (<div>
            <h3>Invoice for company <em>{invoice.title}</em></h3>
            <p>{invoice.value}</p>
          </div>
        )
      }
      </div>
    )
  }
}

export default App;
