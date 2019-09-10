import { StyleSheet } from 'react-native'
import { AppFont } from '../../../Constants/Fonts'
import { Color } from '../../../Constants/Colors'

export default StyleSheet.create({
  viewStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: Color.shadow,
    shadowOpacity: 0.1,
    elevation: 3
  },
  textStyle: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.themeDark
  }
})
