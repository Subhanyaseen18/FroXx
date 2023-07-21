import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import I from 'react-native-vector-icons/MaterialIcons';
import {Colours} from '../../Components/Colors';
import Modals from '../../Modal';
import DocumentPicker from 'react-native-document-picker';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import Location from '../Location';
import {Formik} from 'formik';
import * as yup from 'yup';
export default function Support(props) {
  const styles = useThemeAwareObject(createstyles);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleDocumentSelection = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      if (selectedDocuments.length + results.length > 3) {
        return;
      }

      const newSelectedDocuments = results.map(document => ({
        name: document.name,
        // uri: document.uri,
      }));

      setSelectedDocuments(prevSelectedDocuments => [
        ...prevSelectedDocuments,
        ...newSelectedDocuments,
      ]);
    } catch (error) {
      SnackBar(error.error, true, 'short');
    }
  };

  const handledata = values => {};
  const Supportdata = yup.object().shape({
    loc: yup.string().required('Please enter location'),
    dis: yup.string().required('Please enter discription'),
  });

  return (
    <Formik
      initialValues={{
        loc: '',
        dis: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        handledata(values);
      }}
      validationSchema={Supportdata}>
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
              <Icon name="leftcircle" size={40} color={Colours.white} />
            </TouchableOpacity>
            <Text style={styles.heading}>Support</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Ion name="md-person-circle" size={46} color={Colours.white} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.ContainerLoc,
              {
                borderColor:
                  errors.loc && touched.loc ? Colours.red : Colours.green,
              },
            ]}>
            <TextInput
              onChangeText={handleChange('loc')}
              onBlur={handleBlur('loc')}
              value={values.loc}
              placeholder="Location"
              style={styles.loctext}></TextInput>
            <Ion name="location-outline" size={20} color="black" />
          </View>
          {errors.loc && touched.loc && (
            <Text style={styles.eror}>{errors.loc}</Text>
          )}
          <View
            style={[
              styles.ContainerDIS,
              {
                borderColor:
                  errors.dis && touched.dis ? Colours.red : Colours.green,
              },
            ]}>
            <TextInput
              onChangeText={handleChange('dis')}
              onBlur={handleBlur('dis')}
              value={values.dis}
              style={styles.textinput}
              multiline
              placeholder="Description of problem..."></TextInput>
          </View>
          {errors.dis && touched.dis && (
            <Text style={styles.eror}>{errors.dis}</Text>
          )}
          <TouchableOpacity
            style={styles.Containerfile}
            onPress={handleDocumentSelection}>
            <View style={styles.Containeruplodfile}>
              <Text style={styles.uplodfiletext}>Upload file </Text>
              <I
                style={styles.icon}
                name="attach-file"
                size={20}
                color={Colours.blue}
              />
            </View>
            <View>
              {selectedDocuments.map((document, index) => (
                <View key={index}>
                  <Text style={styles.filetext}>{document.name}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Containerbtn} onPress={handleSubmit}>
            <Text style={styles.btntext}>Submit</Text>
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
