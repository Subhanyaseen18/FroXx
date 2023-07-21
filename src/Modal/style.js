import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {Colours} from '../Components/Colors';
const createstyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },

    modalstylebackground: {
      flex: 1,
      backgroundColor: theme.color.modelbackscreenColor,
      justifyContent: 'center',
    },
    modalstyle: {
      height: wp(70),
      backgroundColor: theme.color.modalBackground,
      borderRadius: theme.borders.radius2,
      width: wp(60),
      alignSelf: 'center',
      justifyContent: 'space-evenly',
    },
    Containerbox: {
      flex: 0.2,
      backgroundColor: Colours.grey,
      marginTop: hp(1),
      justifyContent: 'center',
      width: wp(50),
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
    },
    headingtext: {
      alignSelf: 'center',
      fontSize: theme.size.small,
      color:theme.color.inputtext,
      fontWeight:  theme.family.large,
    },
   
    Containerlogout: {
      flex: 0.2,
      backgroundColor:theme.color.logoutborderColor,
      marginTop: hp(1),
      justifyContent: 'center',
      width: wp(50),
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
    },headinglogout:{
      color:theme.color.white,
      alignSelf: 'center',
      fontSize: theme.size.small,
      fontWeight: theme.family.large,
    }
  });
  return styles;
};
export default createstyles;
