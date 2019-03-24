import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import I18n from '../../localization/i18n';

export default class SignUpView extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={I18n.t("signUp01")} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        paddingHorizontal: 20
    },
});
