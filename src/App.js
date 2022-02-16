import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';

import { AuthRoutes } from './routes/routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <AuthRoutes />
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
