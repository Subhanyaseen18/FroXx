import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import {StyleSheet} from 'react-native';
// import { COLORS } from '../Colors/colors';
  
  export const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: 'white',
    },
    map: {
      flex:1,
        marginTop:hp(2),
        marginBottom:hp(0.2)
        // height: hp(52.5),
        // width: wp(100),
      },
})