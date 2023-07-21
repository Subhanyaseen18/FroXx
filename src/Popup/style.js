import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const createstyles = theme => {
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupContainer: {
      backgroundColor: theme.color.white,
      borderRadius: theme.borders.radius3,
      alignItems: 'center',
      height: wp(40),
      width: wp(70),

      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    viewButton: {
      backgroundColor: theme.color.viewbtnColor,
      height: hp(8),
      width: wp(25),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borders.radius1,
      marginRight: wp(3),
    },
    cancelButton: {
      backgroundColor: theme.color.logoutborderColor,
      height: hp(8),
      width: wp(25),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borders.radius1,
    },
    buttonText: {
      color: theme.color.white,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
  });
  return styles;
};
export default createstyles;
