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
    Containerwel: {
      marginTop: wp(15),
      backgroundColor: theme.color.welbackColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borders.radius3,
      width: wp(94),
      height: wp(23),
      alignSelf: 'center',
      marginBottom: hp(6),
    },
    weltext: {
      color: theme.color.borderColor,
      fontSize: theme.size.medium,
      fontWeight: theme.family.xlarge,
      width: wp(80),
    },
    MainContainer: {
      flex: 1,
    },
    Containerbox: {
      borderWidth: 2,
      borderColor: theme.color.borderColor,
      height: wp(18),
      backgroundColor: theme.color.textColor,
      alignItems: 'center',
      width: wp(88),
      alignSelf: 'center',
      marginTop: wp(3),
      justifyContent: 'center',
      borderRadius: theme.borders.radius3,
    },
    boxtext: {
      color: theme.color.borderColor,
      fontSize: theme.size.medium,
      fontWeight: theme.family.xlarge,
      alignSelf: 'center',
    },
    Containerbtn: {
      backgroundColor: theme.color.buttonBackground,
      height: wp(18),
      alignItems: 'center',
      width: wp(40),
      alignSelf: 'flex-end',
      marginRight: wp(5),
      marginTop: wp(10),
      justifyContent: 'center',
      borderRadius: theme.borders.radius3,
    },
    btntext: {
      color: theme.color.textColor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
    indicator: {
      height: hp(50),
      alignSelf: 'center',
      justifyContent: 'center',
    },
    ContainerRes: {
      marginTop: wp(15),
      backgroundColor: theme.color.welbackColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borders.radius3,
      width: wp(94),
      height: wp(20),
      alignSelf: 'center',
      marginBottom: hp(6),
    },
    Restext: {
      color: theme.color.borderColor,
      fontSize: theme.size.medium,
      fontWeight: theme.family.xlarge,
      width: wp(80),
      alignSelf: 'center',
      marginLeft: wp(38),
    },
    ContainerNot: {
      height: hp(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    Notques: {
      color: theme.color.borderColor,
      fontSize: theme.size.medium,
      fontWeight: theme.family.xlarge,
      alignSelf: 'center',
    },
  });
  return styles;
};

export default createstyles;
