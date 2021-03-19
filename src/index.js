import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import About from './pages/About';
import SplashPage from './pages/SplashPage'
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={"/main"} component={App}/>
        <Route path={'/about'} component={About}/>
        <Route path={"/"} component={SplashPage}/>
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
