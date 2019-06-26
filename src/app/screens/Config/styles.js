import { StyleSheet } from 'react-native';

import { colorSecondary, white } from '../../../constants/colors';

export default StyleSheet.create({
  configInput: {
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: colorSecondary,
    color: white,
    height: 47,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 0,
    paddingTop: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250
  },
  searching: {
    backgroundColor: 'rgba(44, 114, 160, 0.8)'
  },
  configInputMain: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
    color: 'white',
    marginHorizontal: 20
  },
  margin: {
    marginTop: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonMargin: {
    margin: 20
  }
});
