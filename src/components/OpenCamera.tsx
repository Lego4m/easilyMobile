import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'

export default function OpenCamera() {

  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    requestPermission()
  }, []);

  if (!permission) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        >
          <TouchableOpacity style={styles.button}>
            <FontAwesome name='camera' color='white' size={24} />
          </TouchableOpacity>
        </Camera>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: '88%',
    marginLeft: '47%',
  }
});
