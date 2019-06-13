import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Icons } from '../Constants/Assets'
import FlightsFeedView from '../Views/Flights/FlightsFeedView'

import Routes from './Routes'

export const FlightsNavigator = createStackNavigator(
  {
    [Routes.FlightsFeedView]: { screen: FlightsFeedView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: 'Flights',
      tabBarIcon: ({ tintColor }) => (
        <Image source={Icons.flight} style={{ tintColor: tintColor }} />
      )
    }),
    initialRouteName: Routes.FlightsFeedView
  }
)
