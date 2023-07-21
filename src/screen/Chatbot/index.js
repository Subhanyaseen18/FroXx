import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './style';
import Text from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colours} from '../../Components/Colors';
import Modals from '../../Modal';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {ActivityIndicator} from 'react-native-paper';
import {getDefaultQuestion, getAnswerOfQuestion} from '../../Apis/Url';
import {useGetMethodMutation, usePostMethodMutation} from '../../Apis';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../SnackBar';
export default function Chatbot(props) {
  const styles = useThemeAwareObject(createstyles);
  const [select, setselect] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [showdata, setshowdata] = useState([1]);
  const [resole, setresole] = useState();
  const [Id, setId] = useState();
  const [getdata, resp] = useGetMethodMutation();
  const [newdata, res] = usePostMethodMutation();
  const {token} = useSelector(state => state.user);
  const focus = useIsFocused();
  const handlegetData = async () => {
    try {
      let setdata = {
        url: getDefaultQuestion,
        token: token,
      };
      const temp = await getdata(setdata).unwrap();

      if (temp.statusCode == 200) {
        setshowdata(temp.data);
      }
    } catch (error) {
      SnackBar(error.error, true, 'short');
    }
  };

  useEffect(() => {
    if (focus == true) handlegetData();
  }, [focus]);
  const handlesetData = async () => {
    setselect(0);
    try {
      let senddata = {
        url: getAnswerOfQuestion,
        token: token,
        data: {
          id: Id,
        },
      };
      const temp1 = await newdata(senddata).unwrap();

      if (temp1.statusCode == 200) {
        setshowdata(temp1.data);
      }
    } catch (error) {
      SnackBar(error.error, true, 'short');
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Containerbar}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.goBack()}>
          <Icon name="leftcircle" size={40} color={Colours.white} />
        </TouchableOpacity>
        <Text style={styles.heading}>FroXx Chatbot</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ion name="md-person-circle" size={46} color={Colours.white} />
        </TouchableOpacity>
      </View>
      {resole ? (
        <View style={styles.ContainerRes}>
          <Text style={styles.Restext}>{resole}</Text>
        </View>
      ) : (
        <View style={styles.Containerwel}>
          <Text style={styles.weltext}>
            Welcome to our Visual Assistance support app. We're here to help
            you. Please select topic below.
          </Text>
        </View>
      )}

      {showdata.length == 0 && (
        <View state={styles.ContainerNot}>
          <Text style={styles.Notques}>No question available</Text>
        </View>
      )}
      <View>
        {res.isLoading || resp.isLoading ? (
          <ActivityIndicator
            style={styles.indicator}
            animating={true}
            color="white"
            size={50}
          />
        ) : (
          <FlatList
            data={showdata}
            renderItem={({item, index}) => {
              return (
                <View style={styles.MainContainer}>
                  {item.name == '' ? (
                    setresole(item.description)
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setselect(index + 1), setId(item._id);
                      }}
                      style={[
                        styles.Containerbox,
                        select === index + 1 && {borderColor: Colours.red},
                      ]}>
                      <Text
                        style={[
                          styles.boxtext,
                          select === index + 1 && {color: Colours.red},
                        ]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        )}
      </View>
      {select == 0 ? (
        <Text></Text>
      ) : (
        <TouchableOpacity onPress={handlesetData} style={styles.Containerbtn}>
          <Text style={styles.btntext}>Next</Text>
        </TouchableOpacity>
      )}

      <Modals
        visible={modalVisible}
        props={props}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
