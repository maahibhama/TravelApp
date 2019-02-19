import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default class WelcomeView extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    topView: {
        paddingHorizontal: 20
    },
});
