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

    heading: {
      color: theme.color.textColor,
      fontSize: theme.size.large,
      fontWeight: theme.family.xlarge,
    },
    Containerheading: {
      marginTop: hp(2),
      flex: 0.3,
      backgroundColor: theme.color.white,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      width: wp(90),
      marginTop: wp(7),
      backgroundColor: 'white',
      alignSelf: 'center',
      marginBottom: hp(2),
      borderRadius: theme.borders.radius2,
    },
    FlatContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(90),
    },
    flattext: {
      color: theme.color.inputtext,
      marginLeft: wp(2),
      fontSize: theme.size.medium,
      fontWeight: theme.family.large,
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    imgline: {
      tintColor: theme.color.white,
      width: wp(79),
      alignSelf: 'center',
      height: wp(0.5),
      marginTop: wp(3),
    },
    iconcolor: {
      color: theme.color.bariconColor,
    },
    Flaticoncolor: {
      color: theme.color.modaliconColor,
    },
    indicator: {
      height: hp(75),
      alignSelf: 'center',
      justifyContent: 'center',
    },
  });
  return styles;
};
export default createstyles;
