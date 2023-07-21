import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeAwareObject } from '../theme/theme';
import createstyles from './style';
export  const Popup = ({ isVisible, onClose,onViewPress}) => {
    const styles = useThemeAwareObject(createstyles);
const onCancelPress=()=>{
    onClose()
}

    
    return (
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.viewButton}
               onPress={()=>{onViewPress(),onCancelPress()}}
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} 
              onPress={onCancelPress}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  