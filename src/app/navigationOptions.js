import { white, colorSecondary } from '../constants/colors';

import styles from './styles';

export function stackNavigator() {
  return {
    headerTitleStyle: styles.navTitle
  };
}

export function initialLoading() {
  return {
    header: null
  };
}

export function home() {
  return {
    title: 'GPS Tracker Map',
    headerStyle: {
      height: 50,
      backgroundColor: colorSecondary
    },
    headerTitleStyle: {
      color: white,
      fontSize: 18,
      fontWeight: '600'
    }
  };
}

export function withoutHeader() {
  return {
    header: null
  };
}
