import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles=theme=>{
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor:  theme.color.appBackground,
    },
    Containerbar: {
      marginTop: hp(1),
      flexDirection: 'row',
      alignSelf:'center',
      justifyContent:'space-between',
      marginLeft: wp(5),
      alignItems: 'center',
      height: wp(20),
      width:wp(86)
       },
    Containerdatebar: {
      marginTop: hp(2),
      flex: 0.3,
      backgroundColor: theme.color.white,
      alignItems:'center',
      justifyContent:'center'
    },
    Containerboxes: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    Containerbox: {
      marginTop: hp(7),
      borderWidth: 2,
      borderColor: theme.color.white,
      height: wp(35),
      width: wp(45),
      borderRadius:theme.borders.radius3,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    boxtext: {
      color: theme.color.white,
      fontSize: theme.size.medium,
      fontWeight: theme.family.xlarge,
    },datebar:{
      color: theme.color.headingTextborder,
      fontSize: theme.size.medium,
      fontWeight:theme.family.xlarge,
    },bartext:{
      color: theme.color.white,
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
    },
    Iconcolor:{
      color: theme.color.white,
    }
  });
  return styles
}
export default createstyles