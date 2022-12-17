import { StyleSheet, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MapView, { Marker, Callout } from 'react-native-maps';


export function GoogleMaps() {
  const navigation = useNavigation();

  function handleGoToChart() {
    navigation.navigate('detail', { location: 'Parque Tecnológico de Pelotas' });
  }

  return (
    <MapView
      initialRegion={{
        latitude: -31.7536928,
        longitude: -52.3183693,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      }}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: -31.753904592386466,
          longitude: -52.31786004332315
        }}
      >
        <Image
          source={{ uri: 'http://pelotasparquetecnologico.com.br/manager/upload/efeaaa-IMG-2656.jpg' }}
          style={styles.avatar}
        />

        <Callout style={styles.callout} onPress={handleGoToChart}>
          <Text style={styles.calloutButtonText}>
            Visualizar interior
          </Text>
        </Callout>
      </Marker>
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  callout: {
    width: 200,
    flexGrow: 1,
    borderRadius: 8,
    padding: 8,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
  },
  calloutButton: {
    
  },
  calloutButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#003881'
  }
})