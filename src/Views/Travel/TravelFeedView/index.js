import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../../localization/i18n'
import { Icons } from '../../../Constants/Assets'
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'
import CountryCollcetionView from '../../../Components/CountryCollcetionView'
import FavoritePlacesView from '../../../Components/FavoritePlacesView'
import { Countries, Places } from '../../../Constants/Constants'
import PlaceCollectionView from '../../../Components/PlaceCollectionView'
import BlogsView from '../../../Components/BlogsView'

import styles from './styles'

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
        {this.renderFavoritePlaces()}
        {this.renderTopCity()}
        {this.renderBlogView()}
      </View>
    )
  }

  renderCountryCollectionView () {
    return <CountryCollcetionView data={Countries} />
  }

  renderFavoritePlaces () {
    return (
      <FavoritePlacesView navigation={this.props.navigation} data={Places} />
    )
  }

  renderTopCity () {
    return (
      <PlaceCollectionView
        navigation={this.props.navigation}
        data={Places}
        headerTitle={I18n.t('travel03')}
      />
    )
  }

  renderBlogView () {
    return (
      <BlogsView
        data={Places}
        navigation={this.props.navigation}
        headerTitle={I18n.t('travel04')}
      />
    )
  }
}
export default TravelFeedView
