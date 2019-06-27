import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './reactoConfig';
import reduxStore from '../redux/store';

import App from './app';

// eslint-disable-next-line react/prefer-stateless-function
class MainApplication extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <App />
      </Provider>
    );
  }
}

export default MainApplication;
