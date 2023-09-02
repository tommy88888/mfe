import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';
// import Auth from './components/Auth';
// import Main from './components/Main';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          {/* <h1>
            <Link to='/auth/signup'>signup</Link>
          </h1>
          <h1>
            <Link to='/auth/signin'>signin</Link>
          </h1>
          <h1>
            <Link to='/auth'>Auth</Link>
          </h1> */}
          <Switch>
            <Route exact path='/auth/signin'>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route exact path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
            {/* <Route path='/auth' component={Auth} />
            <Route path='/' component={Main} /> */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
export default App;
