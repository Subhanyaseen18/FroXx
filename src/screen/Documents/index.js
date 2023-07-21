import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import Icondot from 'react-native-vector-icons/Fontisto';
import Modals from '../../Modal';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {Popup} from '../../Popup';
import {useGetMethodMutation} from '../../Apis';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../SnackBar';
import {documents} from '../../Apis/Url';
import {ActivityIndicator} from 'react-native-paper';
import FileViewer from 'react-native-file-viewer';

import RNFS from 'react-native-fs';
export default function Documents(props) {
  const styles = useThemeAwareObject(createstyles);
  const [modalVisible, setModalVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showdata, setshowdata] = useState([]);
  const [getdata, resp] = useGetMethodMutation();
  const [pathdoc, setpathdoc] = useState();
  const [typedoc, settypedoc] = useState();
  const {token} = useSelector(state => state.user);
  const focus = useIsFocused();
  const handlegetData = async () => {
    try {
      let setdata = {
        url: documents,
        token: token,
      };
      const temp = await getdata(setdata).unwrap();
      if (temp.statusCode == 200) {
        setshowdata(temp.allDocs);
      }
    } catch (error) {
      SnackBar(error.error, true, 'short');
    }
  };

  useEffect(() => {
    if (focus == true) handlegetData();
  }, [focus]);

  const openFile = () => {
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${typedoc}`;
    const options = {
      fromUrl: pathdoc,
      toFile: localFile,
    };
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        SnackBar('Document Open', true, 'short');
      })
      .catch(error => {
        SnackBar(error.error, true, 'short');
      });
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Containerbar}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.goBack()}>
          <Icon name="leftcircle" size={40} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Documents</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ion name="md-person-circle" size={46} style={styles.Bariconcolor} />
        </TouchableOpacity>
      </View>

      <View>
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
                <View style={styles.MianContainerflat}>
                  <View style={styles.Containerflat}>
                    <Icon
                      name="pdffile1"
                      size={35}
                      style={styles.Flaticoncolor}
                    />
                    <Text style={styles.flatname}>{item.filename}</Text>
                    <TouchableOpacity
                      style={styles.moreicon}
                      onPress={() => {
                        setpathdoc(item.path);
                        settypedoc(item.ext);
                        setPopupVisible(true);
                      }}>
                      <Icondot
                        name="more-v-a"
                        size={25}
                        style={styles.Flaticoncolor}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
      <Modals
        visible={modalVisible}
        props={props}
        onClose={() => setModalVisible(false)}
      />
      <Popup
        isVisible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
        onViewPress={() => openFile()}
      />
    </View>
  );
}
