import {
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../../Components/CustomText';

import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconemail from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from 'react-native-paper';
import {Colours} from '../../Components/Colors';
import {images} from '../../Components/Imagespath';
import {useDispatch} from 'react-redux';
import {isChangePassword, updateToken, userdata} from '../../Redux/slice';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {usePostMethodMutation} from '../../Apis';
import {login} from '../../Apis/Url';
import SnackBar from '../../SnackBar';
import jwt_decode from 'jwt-decode';
export default function Login(props) {
  const styles = useThemeAwareObject(createstyles);
  const dispatch = useDispatch();
  const [showpassword, setshowpassword] = useState(true);
  const [newdata, res] = usePostMethodMutation();
  const handleLogin = async data => {
    try {
      let senddata = {
        url: login,
        data: {
          email: data.email,
          password: data.password,
        },
      };

      const temp = await newdata(senddata).unwrap();

      if (temp.statusCode == 200) {
        dispatch(updateToken(temp.data.token));
        dispatch(isChangePassword(temp.isChangePassword));
        var token = temp.data.token;
        var decoded = jwt_decode(token);
        dispatch(userdata(decoded));
      }
    } catch (error) {
      SnackBar(error.data.error, true, 'short');
    }
  };

  const Loginvalidation = yup.object().shape({
    email: yup
      .string()

      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1}\.[0-9]{1}\.[0-9]{1}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
        'Invalid email',
      )

      .required('Please enter email'),
    password: yup
      .string()

      .required('Please enter password'),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\/\.\(\)\,\_\"\'\:\;\?])(?=.{8,})/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    // ),
  });
  return (
    <Formik
      initialValues={{email: 'test12@gmail.com', password: '1234'}}
      validateOnMount={true}
      onSubmit={values => handleLogin(values)}
      validationSchema={Loginvalidation}>
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
          <StatusBar backgroundColor={Colours.green} barStyle="light-content" />
          <View style={styles.ContainerImg}>
            <Image style={styles.logoimg} source={images.appicon} />
          </View>

          <View style={styles.MainContainer}>
            <View
              style={[
                styles.containerinputbox,
                {
                  borderColor:
                    errors.email && touched.email ? Colours.red : Colours.green,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.inputuseremail}
                placeholder="Email"
                placeholderTextColor={Colours.green}></TextInput>
              <View style={styles.eyeicon}>
                <Iconemail style={styles.iconColor} name="email" size={25} />
              </View>
            </View>
            {<Text style={styles.eror}>{errors.email}</Text>}
            <View
              style={[
                styles.containerinputbox,
                {
                  borderColor:
                    errors.password && touched.password
                      ? Colours.red
                      : Colours.green,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={showpassword}
                style={styles.inputuseremail}
                placeholder="Password"
                placeholderTextColor={Colours.green}></TextInput>

              <TouchableOpacity
                style={styles.eyeicon}
                onPress={() => setshowpassword(!showpassword)}>
                {showpassword == false ? (
                  <Icon style={styles.iconColor} name="eye" size={25} />
                ) : (
                  <Icon style={styles.iconColor} name="eye-off" size={25} />
                )}
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && (
              <Text style={styles.eror}>{errors.password}</Text>
            )}

            <View>
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.containerBtn}>
                  <Text>
                    {res.isLoading ? (
                      <ActivityIndicator
                        animating={true}
                        color="white"
                        size={30}
                      />
                    ) : (
                      <Text style={styles.btntext}> Login</Text>
                    )}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
