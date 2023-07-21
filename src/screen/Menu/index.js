import {View, TouchableOpacity, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../../Components/CustomText';
import Ion from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colours} from '../../Components/Colors';
import {useIsFocused} from '@react-navigation/native';
import {date} from 'yup';
import {useSelector} from 'react-redux';
import Modals from '../../Modal';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
export default function Menu(props) {
  const [time, setTime] = useState('');
  const {user} = useSelector(state => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const styles = useThemeAwareObject(createstyles);
  const focus = useIsFocused();
  const handlehours = () => {
    const date = new Date();
    const hours = date.getHours();

    const twelveHourFormat = hours % 12 || 12;

    if (twelveHourFormat >= 5 && hours <= 12) {
      setTime('Good Morning,');
    } else if (hours > 12 && hours <= 17) {
      setTime('Good Afternoon,');
    } else {
      setTime('Good Evening,');
    }
  };

  useEffect(() => {
    if (focus == true) handlehours();
  }, [focus]);

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colours.green} barStyle="light-content" />
      <View style={styles.Containerbar}>
        <Text></Text>
        <Text style={styles.bartext}>Menu</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ion name="md-person-circle" size={46} style={styles.Iconcolor} />
        </TouchableOpacity>
      </View>
      <View style={styles.Containerdatebar}>
        <Text style={styles.datebar}>
          {time}
          {user?.firstname + user?.lastname}
        </Text>
      </View>

      <View style={styles.Containerboxes}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Chatbot')}>
          <View style={styles.Containerbox}>
            <Ion
              name="chatbox-ellipses-outline"
              size={40}
              style={styles.Iconcolor}
            />
            <Text style={styles.boxtext}>FroXx Chatbot</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Faq')}>
          <View style={styles.Containerbox}>
            <Icons
              name="chat-question-outline"
              size={40}
              style={styles.Iconcolor}
            />
            <Text style={styles.boxtext}>FAQ</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Containerboxes}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Documents')}>
          <View style={styles.Containerbox}>
            <Icons
              name="file-document-multiple-outline"
              size={40}
              style={styles.Iconcolor}
            />
            <Text style={styles.boxtext}>Documents</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Support')}>
          <View style={styles.Containerbox}>
            <Icons name="face-agent" size={40} style={styles.Iconcolor} />
            <Text style={styles.boxtext}>Support</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modals
        visible={modalVisible}
        props={props}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
