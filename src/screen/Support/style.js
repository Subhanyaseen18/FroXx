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
      color: theme.color.white,
      fontSize: theme.size.large,
      fontWeight:theme.family.xlarge,
    },
    ContainerLoc: {
      height: hp(8),
      backgroundColor: theme.color.white,
      width: wp(90),
      alignSelf: 'center',
      marginTop: wp(5),
      borderRadius: theme.borders.radius3,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
    },
    loctext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.large,
      width: wp(75),
      color: theme.color.inputtext,
      marginLeft: wp(5),
      alignSelf: 'center',
    },
    ContainerText: {
      color: theme.color.white,
      fontSize: theme.size.medium,
      fontWeight:  theme.family.medium,
    },
    ContainerDIS: {
      backgroundColor: theme.color.white,
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
      height: hp(20),
      marginTop: hp(2),
      width: wp(90),
      marginTop: hp(5),
      borderWidth: 2,
    },
    textinput: {
      width: wp(88),
      alignSelf: 'center',
      marginLeft: wp(5),
      fontSize: theme.size.small,
      fontWeight: theme.family.large,
      color: theme.color.inputtext,
    },
    Containerbtn: {
      backgroundColor: theme.color.buttonBackground,
      height: wp(18),
      alignItems: 'center',
      width: wp(40),
      alignSelf: 'flex-end',
      marginRight: wp(5),
      marginTop: wp(5),
      justifyContent: 'center',
      borderRadius: theme.borders.radius3,
      marginBottom: hp(3),
    },
    btntext: {
      color: theme.color.white,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
    Containerfile: {
      backgroundColor: theme.color.white,
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
      height: hp(20),

      width: wp(90),
      marginTop: hp(5),
    },
    filetext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.large,
      width: wp(80),
      color: theme.color.inputtext,
      alignSelf: 'center',
      marginTop: hp(1),
    },
    uplodfiletext: {
      marginTop: hp(1),
      color: theme.color.inputtext,
      marginLeft: wp(5),
    },
    icon: {
      marginTop: hp(1),
      color: theme.color.viewbtnColor,
    },
    Containeruplodfile: {
      flexDirection: 'row',
    },
    eror: {
      marginLeft: wp(6),
      fontSize: theme.size.xSmall,
      color: theme.color.error,
      width: wp(92),
      fontWeight:  theme.family.medium,
    },
  });
  return styles;
};
export default createstyles;
