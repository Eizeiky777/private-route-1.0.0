import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './components/redux/store';

import App from './App';
import Header from './components/beranda/header';
import Detail from './components/beranda-mdetail/detail';
import PrivateRoute from "./components/private/privateRoute";

import * as serviceWorker from './serviceWorker';

function Final(){

  const [isLogin, setLogin] = useState(false);

  const handleLogin = (payload) => {
    if (payload === true) {
      setLogin(true);
    } else {
      console.log("invalid email and password");
    }
  };

  return(
    <Provider store={store}>
      <div>
          <Router>
            <Header 
              isLogin={isLogin}
              handleLogin={handleLogin}
            />
          <Switch>
            <Route exact path="/" component={App} />
              <PrivateRoute
                exact
                path="/detail/:id/:genre/:status"
                component={Detail}
                isLogin={isLogin}
              />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}


ReactDOM.render(
  <>
    <Final />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
