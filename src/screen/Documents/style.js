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
      marginTop: hp(2),
      flex: 0.2,
      backgroundColor: theme.color.white,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    heading: {
      color: theme.color.white,
      fontSize: theme.size.large,
      fontWeight: theme.family.xlarge,
      marginRight: wp(2),
    },
    MianContainerflat: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: theme.color.welbackColor,
      marginTop: hp(3),
      width: wp(90),
      height: wp(20),
      borderRadius: theme.borders.radius3,
    },
    Containerflat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(80),
      alignSelf: 'center',
    },
    // ,flaticon:{

    // }
    flatname: {
      color: theme.color.borderColor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(65),
    },
    Flaticoncolor: {
      color: theme.color.borderColor,
    },
    Bariconcolor: {
      color: theme.color.white,
    },
    indicator: {
      height: hp(70),
      alignSelf: 'center',
      justifyContent: 'center',
    },
    moreicon: {
      width: wp(10),
      marginLeft: wp(5),
    },
  });
  return styles;
};
export default createstyles;
