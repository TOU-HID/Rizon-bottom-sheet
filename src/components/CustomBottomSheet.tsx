import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const CustomBottomSheet = ({ visible, onClose, children }: Props) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.sheet}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 5,
    padding: 20,
  },
});
