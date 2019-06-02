import { StyleSheet } from 'react-native';

import { colorSecondary, white } from '../../../constants/colors';

export default StyleSheet.create({
    configInput: {
        border: 0,
        borderRadius: 100,
        backgroundColor: colorSecondary,
        color: white,
        height: 47,
        margin: 0,
        padding: 0,
        paddingLeft: 55,
        paddingRight: 18,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        width: 250,
    },
    margin: {
        marginTop: 25
    }
});
