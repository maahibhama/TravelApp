import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import { Color } from '../../Constants/Colors';
import I18n from '../../localization/i18n';

export default class LoginView extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={I18n.t("signInO1")}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.themeBackground
    },
    topView: {
        paddingHorizontal: 20
    },
});
