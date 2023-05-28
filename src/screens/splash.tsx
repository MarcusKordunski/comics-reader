import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icon.png')}
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4511e',
    },
    logo: {
        width: 200,
        height: 200,
    },
});