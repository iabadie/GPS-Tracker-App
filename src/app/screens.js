import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colorBackground } from '../constants/colors';

import HomeScreen from './screens/Home';
import ConfigScreen from './screens/Config';
import * as NavigationOptions from './navigationOptions';

export const appNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: NavigationOptions.home
    },
    Config: {
      screen: ConfigScreen,
      navigationOptions: NavigationOptions.config
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: NavigationOptions.stackNavigator,
    cardStyle: {
      backgroundColor: colorBackground
    },
    headerMode: 'screen'
  }
);

export default createAppContainer(appNavigator);
