import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      
      <a href="https://vitejs.dev" target="_blank">
          <img src="../images/logoDragon.png" className="logo" alt="Vite logo" />
        </a>

      <h1>Titulo placoso JAPS</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/expenses">Expenses</Link>|{' '}
      <Link to="/invoices">Invoices</Link> 
        
      </nav>
      <Outlet />
    </div>
  );
}
