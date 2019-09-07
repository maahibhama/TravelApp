import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../../localization/i18n'
import { Icons } from '../../../Constants/Assets'
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'
import CountryCollcetionView from '../../../Components/CountryCollcetionView'

import styles from './styles'
import { Countries } from '../../../Constants/Constants'

class TravelFeedView extends Component {
  static navigationOptions = {
    header: null
  }

  static defaultProps = {}

  static propTypes = {}

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <TitleNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('travel02')}
          showRightButton
          rightButtonIcon={Icons.search}
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

  renderMiddleView () {
    return (
      <View style={styles.middleView}>
        {this.renderCountryCollectionView()}
      </View>
    )
  }

  renderCountryCollectionView () {
    return <CountryCollcetionView data={Countries} />
  }
}
export default TravelFeedView
