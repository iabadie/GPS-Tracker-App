import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colorBackground } from '../constants/colors';
import { isIos } from '../constants/platform';

import HomeScreen from './screens/Home';
import * as NavigationOptions from './navigationOptions';

export const appNavigator = createStackNavigator(
  {
    'Home': {
      screen: HomeScreen,
      navigationOptions: NavigationOptions.home
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
