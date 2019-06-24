import { StyleSheet } from 'react-native';

import { colorBackground, white } from '../constants/colors';
import { FONT_SIZE_BIG } from '../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toastStyle: {
    color: 'red'
  },
  navTitle: {
    color: colorBackground,
    fontSize: FONT_SIZE_BIG,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  whiteBackground: {
    backgroundColor: white
  },
  configBluetoothIcon: {
    width: 30,
    height: 30
  }
});

export default styles;
