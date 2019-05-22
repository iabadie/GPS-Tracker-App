import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppNavigator from './screens';
import styles from './styles';

class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
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
