import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {Colours} from '../../Components/Colors';
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

    heading: {
      color: theme.color.textColor,
      fontSize: theme.size.large,
      fontWeight:theme.family.xlarge,
    },

    Container1: {
      flexDirection: 'row',
      marginTop: hp(2),
    },

    Containerboxinput: {
      marginTop: hp(3),
      borderRadius: theme.borders.radius3,
      flexDirection: 'row',
      backgroundColor: theme.color.textColor,
      width: wp(90),
      alignSelf: 'center',
      alignItems: 'center',
      borderWidth: 2,
    },
    input: {
      marginLeft: hp(2),
      width: wp(74),
      color: theme.color.inputtext,
      fontWeight: theme.family.medium,
      height: hp(7),
    },

    containerBtn: {
      marginTop: hp(5),
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: Colours.lightgrey,
      width: wp(90),
      alignSelf: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.textColor,
      fontWeight: theme.family.medium,
    },

    textreview: {
      marginLeft: wp(6),
      marginTop: hp(3),
      color: theme.color.textColor,
      fontSize: theme.size.small,
      marginBottom: hp(-2),
      fontWeight:  theme.family.medium,
    },

    eror: {
      marginLeft: wp(6),
      fontSize: theme.size.xSmall,
      fontWeight:  theme.family.medium,
      color: theme.color.error,
      width: wp(85),
    },
    bariconColor: {
      color: theme.color.bariconColor,
    },
    iconcolor: {
      color: theme.color.IconColor,
    },
  });
  return styles;
};
export default createstyles;
