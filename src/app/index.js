import React, { Component } from 'react';
import { Provider } from 'react-redux';

import reduxStore from '../redux/store';

import App from './app';

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
