//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';

import styles from '../utilities/Styles';

// create a component
export default class IntroductionPage extends Component {

    goToScreen(){

        // in this function you can add navigation to another screen
        Alert.alert("Warning", "Go To Another Screen");
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <StatusBar
                    barStyle='light-content'
                />
                <View style={styles.splashScreenHeaderContainer}>
                    <Text style={styles.splashScreenHeaderTextComponent}>
                        Simplified your
                        
                        <Text style={styles.splashScreenHeaderColoredTextComponent}> Design</Text>
                    </Text>
                    <Text
                        style={styles.splashScreenHeaderDescriptionComponent}
                    >
                        Enjoy the experience
                    </Text>
                </View>
                {/* 
                    begin styling for image
                */}
                <View style={styles.splashScreenBodyContainer}>
                    <View style={styles.splashScreenImageContainer}>
                        {/* Photo by Galina N on Unsplash */}
                        <Image
                            style={styles.splashScreenImageComponent}
                            source={require('../assets/Images/introduction.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.splashScreenFooterContainer}>
                    <TouchableOpacity
                        style={styles.splashScreenFooterButtonComponent}
                        onPress={() => this.goToScreen()}
                    >
                        <Text
                            style={styles.splashscreenFooterButtonTextComponent}
                        >
                            Getting Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
