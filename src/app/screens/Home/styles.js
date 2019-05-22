import { StyleSheet } from 'react-native';

import { colorSecondary, white } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAbsolute: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchButton: {
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorSecondary,
    borderRadius: 30,
    height: 50
  },
  buttonText: {
    color: white
  }
});
