import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// Whenever we start to build our application for production
// rather than generating all these different class names with a prefix 'jss',
// it's going to instead generate them with a prefix 'ma'
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

// BrowserRouter vs MemoryRouter (Router)

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
