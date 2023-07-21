import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './style';

import MapView, {Marker} from 'react-native-maps';

export default function Location() {
  return (
    <View  style={styles.Container}>
       <MapView
              style={styles.map}
              initialRegion={{
                latitude: 31.492261,
                longitude: 74.337004,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                draggable
                coordinate={{
                  latitude: 31.492261,
                  longitude: 74.337004,
                }}
              />
            </MapView>
    </View>
  )
}