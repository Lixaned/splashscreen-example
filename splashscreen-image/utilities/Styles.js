import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashScreenHeaderContainer: {
        width: Dimensions.get('window').width,
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    splashScreenBodyContainer: {
        width: Dimensions.get('window').width,
        flex: 3,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashScreenFooterContainer: {
        width: Dimensions.get('window').width,
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    splashScreenHeaderTextComponent: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    splashScreenHeaderColoredTextComponent: {
        color: '#170aa9'
    },
    splashScreenHeaderDescriptionComponent: {
        color: '#808080'
    },
    splashScreenImageContainer: {
        width: Dimensions.get('window').width-75,
        height: Dimensions.get('window').width-75,
        // backgroundColor: 'red',
        borderRadius: (Dimensions.get('window').width-75) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashScreenFooterButtonComponent: {
        width: 210,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#170aa9',
        borderWidth: 1
    },
    splashscreenFooterButtonTextComponent: {
        color: '#170aa9',
        fontWeight: 'bold'
    },
    splashScreenImageComponent: {
        resizeMode: 'cover',
        width: Dimensions.get('window').width-75,
        height: Dimensions.get('window').width-75,
        borderRadius: (Dimensions.get('window').width-75) / 2,
        // borderWidth: 1,
        borderColor: '#170aa9'
    }
});