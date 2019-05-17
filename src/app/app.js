import React, { Component } from 'react';
import { StatusBar, View, AppState } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppNavigator from './screens';
import styles from './styles';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
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
