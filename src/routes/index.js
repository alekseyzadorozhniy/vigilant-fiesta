import React from 'react';
import { Route } from 'react-router-dom';
import Portfolio from '../portfolio';

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Portfolio} />
    </React.Fragment>
  );
};

export default Routes;
