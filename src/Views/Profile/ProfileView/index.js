import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../../localization/i18n'
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader'

import styles from './styles'
import { Icons } from '../../../Constants/Assets'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';

class ProfileView extends Component {
  static navigationOptions = {
    header: null
  }

  static defaultProps = {}

  static propTypes = {}

  onClickRightButton = this.onClickRightButton.bind(this)

  onClickRightButton () {}

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('profile01')}
          showRightButton
          rightButtonIcon={Icons.profileEdit}
          onClickRightButton={this.onClickRightButton}
        />
        <ManageKeyboardScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.keyboardAvoidView}
        >
          {this.renderMiddleView()}
        </ManageKeyboardScrollView>
      </SafeAreaView>
    )
  }

  renderMiddleView() {
    return(<View style={styles.middleView}>
      
    </View>)
  }

}
export default ProfileView
