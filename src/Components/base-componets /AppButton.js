import React, { Component } from 'react'
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native'
import PropTypes from "prop-types";
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'

export default class AppButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        styles: PropTypes.object,
        textStyles: PropTypes.object,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        styles: {},
        textStyles: {},
        onTouch: () => { }
    };

    render() {
        return (
             <TouchableHighlight style={[styles.viewStyle, this.props.styles]} onPress={this.props.onTouch} underlayColor={'transparent'}>
                 <Text style={[styles.textStyle, this.props.textStyles]}>{this.props.title}</Text>
             </TouchableHighlight>    
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    textStyle:{
        fontSize: AppFont.titleLargeBold.size,
        fontFamily: AppFont.titleLargeBold.name,
        fontWeight: AppFont.titleLargeBold.weight,
        color: Color.themeDark
    }
})
