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

import React, {useState} from 'react';
import Text from '../../Components/CustomText';

import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import Ion from 'react-native-vector-icons/AntDesign';
import {Colours} from '../../Components/Colors';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import Modals from '../../Modal';
import {usePostMethodMutation} from '../../Apis';
import {changePasswordApi} from '../../Apis/Url';
import SnackBar from '../../SnackBar';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import { isChangePassword as ChangePass } from '../../Redux/slice';
export default function Changepass(props) {
  const styles = useThemeAwareObject(createstyles);
  const [currentpasslock, setcurrentpasslock] = useState(true);
  const [newpasslock, setnewpasslock] = useState(true);
  const [confrmpasslock, setconfrmpasslock] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newdata, res] = usePostMethodMutation();
  const {token} = useSelector(state => state.user);
  const {isChangePassword} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handledata = async data => {
    try {
      let senddata = {
        url: changePasswordApi,
        token: token,
        data: {
          oldPassword: data.currentpass,
          password: data.newpass,
          confirmPassword: data.confirmpass,
        },
      };

      const temp = await newdata(senddata).unwrap();

      if (temp.statusCode == 200) {
        props.navigation.navigate('Menu');
        dispatch(ChangePass(true));
        SnackBar('Password changed successfully.', true, 'short');
      }
    } catch (error) {
      SnackBar(error.data.error, true, 'short');
    }
  };

  const Changepassword = yup.object().shape({
    currentpass: yup
      .string()
      .required('Please enter password'),
      

    newpass: yup.string().required('Please enter password'),

    confirmpass: yup
      .string()
      .oneOf([yup.ref('newpass')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      initialValues={{
        currentpass: '',
        newpass: '',
        confirmpass: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        handledata(values);
      }}
      validationSchema={Changepassword}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,

        isValid,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.Container}>
          <View style={styles.Containerbar}>
            {isChangePassword == true ? (
              <TouchableOpacity
                style={styles.backarrow}
                onPress={() => props.navigation.goBack()}>
                <Ion name="leftcircle" size={40} style={styles.bariconColor} />
              </TouchableOpacity>
            ):<Text></Text>}
            <Text style={styles.heading}>Change Password</Text>
            <TouchableOpacity onPress={() => {isChangePassword==true&&setModalVisible(true)}}>
              <Icon
                name="md-person-circle"
                size={46}
                style={styles.bariconColor}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.textreview}>Current Password</Text>
          <View
            style={[
              styles.Containerboxinput,
              {
                borderColor:
                  errors.currentpass && touched.currentpass
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              onChangeText={handleChange('currentpass')}
              onBlur={handleBlur('currentpass')}
              value={values.currentpass}
              secureTextEntry={currentpasslock}
              placeholderTextColor="rgba(0, 0, 0, 0.7)"
              style={styles.input}
              placeholder="Enter Password"></TextInput>
            <TouchableOpacity
              onPress={() => setcurrentpasslock(!currentpasslock)}>
              {currentpasslock == false ? (
                <Icon name="eye" size={25} style={styles.iconcolor} />
              ) : (
                <Icon name="eye-off" size={25} style={styles.iconcolor} />
              )}
            </TouchableOpacity>
          </View>
          {errors.currentpass && touched.currentpass && (
            <Text style={styles.eror}>{errors.currentpass}</Text>
          )}
          <Text style={styles.textreview}>New Password</Text>
          <View
            style={[
              styles.Containerboxinput,
              {
                borderColor:
                  errors.newpass && touched.newpass
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              onChangeText={handleChange('newpass')}
              onBlur={handleBlur('newpass')}
              value={values.newpass}
              secureTextEntry={newpasslock}
              placeholderTextColor="rgba(0, 0, 0, 0.7)"
              style={styles.input}
              placeholder="Enter Password"></TextInput>
            <TouchableOpacity onPress={() => setnewpasslock(!newpasslock)}>
              {newpasslock == false ? (
                <Icon name="eye" size={25} style={styles.iconcolor} />
              ) : (
                <Icon name="eye-off" size={25} style={styles.iconcolor} />
              )}
            </TouchableOpacity>
          </View>
          {errors.newpass && touched.newpass && (
            <Text style={styles.eror}>{errors.newpass}</Text>
          )}
          <Text style={styles.textreview}>Confirm New Password</Text>
          <View
            style={[
              styles.Containerboxinput,
              {
                borderColor:
                  errors.confirmpass && touched.confirmpass
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              onChangeText={handleChange('confirmpass')}
              onBlur={handleBlur('confirmpass')}
              value={values.confirmpass}
              secureTextEntry={confrmpasslock}
              placeholderTextColor="rgba(0, 0, 0, 0.7)"
              style={styles.input}
              placeholder="Enter Password"></TextInput>
            <TouchableOpacity
              onPress={() => setconfrmpasslock(!confrmpasslock)}>
              {confrmpasslock == false ? (
                <Icon name="eye" size={25} style={styles.iconcolor} />
              ) : (
                <Icon name="eye-off" size={25} style={styles.iconcolor} />
              )}
            </TouchableOpacity>
          </View>
          {errors.confirmpass && touched.confirmpass && (
            <Text style={styles.eror}>{errors.confirmpass}</Text>
          )}
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}>
            <View style={styles.containerBtn}>
              <Text>
                {res.isLoading ? (
                  <ActivityIndicator animating={true} color="white" size={30} />
                ) : (
                  <Text style={styles.btntext}>Create New Password</Text>
                )}
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Modals
              visible={modalVisible}
              props={props}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
