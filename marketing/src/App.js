import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

// Whenever we start to build our application for production
// rather than generating all these different class names with a prefix 'jss',
// it's going to instead generate them with a prefix 'ma'
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

// BrowserRouter vs MemoryRouter (Router)

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
