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
    Containerbar: {
      marginTop: hp(1),
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp(90),
      marginLeft: wp(5),
      alignItems: 'center',
      height: wp(20),
    },
    Containerheading: {
      backgroundColor: theme.color.white,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    heading: {
      color: theme.color.white,
      fontSize: theme.size.large,
      fontWeight: theme.family.xlarge,
    },
    Bariconcolor: {
      color: theme.color.white,
    },
    containerinputboxes: {
      marginTop: hp(0.5),
      borderRadius: theme.borders.radius3,
      height: hp(7),
      flexDirection: 'row',
      backgroundColor: theme.color.white,
      width: wp(90),
      alignSelf: 'center',
      borderWidth: 2,
    },

   
    input: {
      marginLeft: hp(2),
      width: wp(77),
      fontWeight:  theme.family.medium,
    },

    headingtext: {
      fontWeight:  theme.family.medium,
      fontSize: theme.size.small,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: 'black',
    },
    eror: {
      marginLeft: wp(6),
      fontSize: theme.size.xSmall,
      color: theme.color.error,
      width: wp(92),
      fontWeight: theme.family.medium,
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
  });
  return styles;
};
export default createstyles;
