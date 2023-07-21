import {
  View,
  StatusBar,
  TextComponent,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import Text from '../Components/CustomText';
import {useDispatch} from 'react-redux';
import { updateToken } from '../Redux/slice';
import createstyles from './style';
import { useThemeAwareObject } from '../theme/theme';
const Modals = ({visible, onClose, props}) => {
  const styles = useThemeAwareObject(createstyles);
  const dispatch = useDispatch();
  const handlepasswordscreen = () => {
    props.navigation.navigate('Changepass');
    onClose();
  };
  const handleprofilescreen = () => {
    props.navigation.navigate('Profile');
    onClose();
  };
  const handlelogout = () => {
    dispatch(updateToken(null))
    onClose();
  };
  return (
    <View style={styles.Container}>
      <View>
        <Modal transparent={true} visible={visible} onRequestClose={onClose}>
          <TouchableOpacity
            style={styles.modalstylebackground}
            onPress={() => onClose()}>
            <View>
              <View style={styles.modalstyle}>
                <TouchableOpacity
                  onPress={handleprofilescreen}
                  style={styles.Containerbox}>
                  <Text style={styles.headingtext}>Profile Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Containerbox}
                  onPress={handlepasswordscreen}>
                  <Text style={styles.headingtext}>Update Password</Text>
                </TouchableOpacity >
                <TouchableOpacity  onPress={handlelogout} style={styles.Containerlogout}>
                  <Text style={styles.headinglogout}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};
export default Modals;
