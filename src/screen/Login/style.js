import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.appBackground,
    },
    ContainerImg: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    MainContainer: {
      flex: 1,
    },
    logoimg: {
      height: wp(50),
      width: wp(60),
    },
    containerinputbox: {
      marginTop: hp(3),
      borderRadius: theme.borders.radius3,
      borderWidth: 2,
      flexDirection: 'row',
      backgroundColor: theme.color.white,
      width: wp(90),
      alignSelf: 'center',
    },
    inputuseremail: {
      marginLeft: hp(2),
      width: wp(74),
      color: theme.color.inputbackcolor,
      fontWeight:  theme.family.medium,
      height: hp(7),
      justifyContent: 'center',
    },
    containerBtn: {
      marginTop: hp(5),
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.buttonBackground,
      width: wp(90),
      alignSelf: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.buttonText,
      fontWeight: theme.family.medium,
    },
    eror: {
      marginLeft: wp(6),
      fontSize: theme.size.xSmall,
      color: theme.color.error,
      width: wp(92),
      fontWeight: theme.family.medium,
    },
    eyeicon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconColor: {
      color: theme.color.IconColor,
    },
  });
  return styles;
};
export default createstyles;
