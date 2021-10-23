import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/partials/Header/Header';
import { Footer } from './components/partials/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';



function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token") !== null ? window.localStorage.getItem("token") : "");

  useEffect(() => {
    window.localStorage.setItem("token", token);
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Header setToken={setToken} token={token} />
      </div>
      <Switch>
        <Route path="/" exact>
          {token.length > 10 ? (
            <Home setToken={setToken} token={token} />
          ) : (
            <Login setToken={setToken} token={token} />
          )}
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;