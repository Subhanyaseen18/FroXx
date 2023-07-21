import {View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';
import Text from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Colours} from '../../Components/Colors';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {usePostMethodMutation} from '../../Apis';
import SnackBar from '../../SnackBar';
import {editProfile} from '../../Apis/Url';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {userdata} from '../../Redux/slice';
export default function Profile(props) {
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createstyles);
  const {user} = useSelector(state => state.user);
  const {token} = useSelector(state => state.user);
  const [editable, seteditable] = useState(false);
  const [newdata, res] = usePostMethodMutation();

  const handleSubmit = async values => {
    try {
      let senddata = {
        url: editProfile,
        token: token,
        data: {
          firstname: values.firstname,
          lastname: values.lastname,
          company: values.company,
        },
      };

      const temp = await newdata(senddata).unwrap();

      if (temp.statusCode == 200) {
        seteditable(false);
        dispatch(userdata(temp.data));
        SnackBar('User updated successfully', true, 'short');
      }
    } catch (error) {
      SnackBar(error.data.error, true, 'short');
    }
  };

  const CreateAccount = yup.object().shape({
    firstname: yup
      .string()

      .required('Please enter firstname'),
    lastname: yup
      .string()

      .required('Please enter lastname'),
    email: yup
      .string()

      .required('Please enter email'),

    company: yup
      .string()

      .required('Please enter company'),
  });

  return (
    <Formik
      initialValues={{
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        company: user?.company,
      }}
      validateOnMount={true}
      onSubmit={values => {
        handleSubmit(values);
      }}
      validationSchema={CreateAccount}>
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
            <TouchableOpacity
              style={styles.backarrow}
              onPress={() => props.navigation.goBack()}>
              <Icon name="leftcircle" size={40} style={styles.Bariconcolor} />
            </TouchableOpacity>
            <Text style={styles.heading}>Profile Details</Text>
            {editable == false ? (
              <TouchableOpacity onPress={() => seteditable(true)}>
                <Icons name="edit" size={40} style={styles.Bariconcolor} />
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}
          </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>First Name</Text>
          </View>
          <View
            style={[
              styles.containerinputboxes,
              {
                borderColor:
                  errors.firstname && touched.firstname
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              editable={editable}
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              value={values.firstname}
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor={'#0000004d'}></TextInput>
          </View>
          {errors.firstname && touched.firstname && (
            <Text style={styles.eror}>{errors.firstname}</Text>
          )}
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Last Name</Text>
          </View>
          <View
            style={[
              styles.containerinputboxes,
              {
                borderColor:
                  errors.lastname && touched.lastname
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              editable={editable}
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor={'#0000004d'}></TextInput>
          </View>
          {errors.lastname && touched.lastname && (
            <Text style={styles.eror}>{errors.lastname}</Text>
          )}
          {editable == false && (
            <View>
              <View style={styles.Containerheadingname}>
                <Text style={styles.headingtext}>Email</Text>
              </View>
              <View
                style={[
                  styles.containerinputboxes,
                  {
                    borderColor:
                      errors.email && touched.email
                        ? Colours.red
                        : Colours.green,
                  },
                ]}>
                <TextInput
                  editable={editable}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={'#0000004d'}></TextInput>
              </View>
              {errors.email && touched.email && (
                <Text style={styles.eror}>{errors.email}</Text>
              )}
            </View>
          )}
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Company</Text>
          </View>
          <View
            style={[
              styles.containerinputboxes,
              {
                borderColor:
                  errors.company && touched.company
                    ? Colours.red
                    : Colours.green,
              },
            ]}>
            <TextInput
              editable={editable}
              onChangeText={handleChange('company')}
              onBlur={handleBlur('company')}
              value={values.company}
              style={styles.input}
              placeholder="Company"
              placeholderTextColor={'#0000004d'}></TextInput>
          </View>
          {errors.company && touched.company && (
            <Text style={styles.eror}>{errors.company}</Text>
          )}
          <View>
            {editable == true && (
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
                      <Text style={styles.btntext}>Update Profile</Text>
                    )}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
}
