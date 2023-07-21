import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconmore from 'react-native-vector-icons/MaterialIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import {Colours} from '../../Components/Colors';
import Modals from '../../Modal';
import {images} from '../../Components/Imagespath';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {useGetMethodMutation, usePostMethodMutation} from '../../Apis';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../SnackBar';
import {faqApi} from '../../Apis/Url';
import {ActivityIndicator} from 'react-native-paper';
export default function Documents(props) {
  const styles = useThemeAwareObject(createstyles);
  const [modalVisible, setModalVisible] = useState(false);
  const [showdata, setshowdata] = useState([]);
  const [more, setmore] = useState(false);
  const [getdata, resp] = useGetMethodMutation();
  const {token} = useSelector(state => state.user);
  const focus = useIsFocused();
  const handlegetData = async () => {
    try {
      let setdata = {
        url: faqApi,
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

  return (
    <View style={styles.Container}>
      <View style={styles.Containerbar}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.goBack()}>
          <Icon name="leftcircle" size={40} style={styles.iconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>FAQ</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ion name="md-person-circle" size={46} style={styles.iconcolor} />
        </TouchableOpacity>
      </View>
      {resp.isLoading ? (
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
                <View style={styles.FlatContainer}>
                  <Text style={styles.flattext}>{item.title}</Text>
                  <TouchableOpacity onPress={() => setmore(!more)}>
                    {more == false ? (
                      <Icons
                        name="chevron-right"
                        size={40}
                        style={styles.Flaticoncolor}
                      />
                    ) : (
                      <Iconmore
                        name="expand-more"
                        size={45}
                        style={styles.Flaticoncolor}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                {more == true && (
                  <Text style={styles.flattext}>{item.body}</Text>
                )}
              </View>
            );
          }}
        />
      )}
      <View>
        <Modals
          visible={modalVisible}
          props={props}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
}
