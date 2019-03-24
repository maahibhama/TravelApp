import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import { Images } from '../../Constants/Assets';
import AppButton from '../../Components/base-componets /AppButton';
import { Color } from '../../Constants/Colors';
import { AppFont } from '../../Constants/Fonts';
import I18n from '../../localization/i18n';
import Routes from '../../Navigations/Routes';

export default class WelcomeView extends Component {
    static navigationOptions = {
        header: null
    }

    signInButtonAction = this.signInButtonAction.bind(this);
    signUpButtonAction = this.signUpButtonAction.bind(this);

    signInButtonAction() {
        this.props.navigation.navigate(Routes.LoginView)
    }

    signUpButtonAction() {
        this.props.navigation.navigate(Routes.SignUpView)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Images.splash} style={styles.imageView} >
                    <View style={styles.topView}>
                        <Text style={styles.headingStyles}>{I18n.t("welcome01")}</Text>
                        <Text style={styles.detailStyles}>{I18n.t("welcome02")}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <AppButton title={I18n.t("welcome03")}
                            onTouch={this.signInButtonAction}
                            styles={styles.signInButtonStyle} />
                        <AppButton title={I18n.t("welcome04")}
                            onTouch={this.signUpButtonAction}
                            styles={styles.signUpButtonStyle} 
                            textStyles={styles.signUpButtonTextStyle}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageView: {
        flex: 1
    },
    topView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headingStyles: {
        fontSize: 30,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.brightText
    },
    detailStyles: {
        marginTop: 20,
        fontSize: AppFont.titleSmall.size,
        fontFamily: AppFont.titleSmall.name,
        fontWeight: AppFont.titleSmall.weight,
        color: Color.brightText
    },
    bottomView: {
        flex: 1,
        justifyContent: "center"
    },
    signInButtonStyle: {
        marginBottom: 20,
        marginHorizontal: 20,
        backgroundColor: Color.themeBackground
    },
    signUpButtonStyle: {
        marginHorizontal: 20,
        backgroundColor: Color.themeDark
    },
    signUpButtonTextStyle:{
        color: Color.brightText
    }
});
