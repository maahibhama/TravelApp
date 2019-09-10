import { StyleSheet } from 'react-native'
import { Color } from './Colors';

export default StyleSheet.create({
  shadow: {
    shadowColor: Color.shadow,
    shadowOpacity: 0.3,
    shadowOffset:{ width: 3, height: 3},
    elevation: 3
  },
})
