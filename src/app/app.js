import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { apiSetup } from '../services/ApiCall';

import AppNavigator from './screens';
import styles from './styles';

if (__DEV__) {
  import('./reactoConfig').then(() => console.log('Reactotron Configured'));
}

class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    apiSetup();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.any // eslint-disable-line
};

export default connect()(App);
