import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { GoogleMaps } from '../../components/GoogleMaps';

import logo from '../../assets/easily.png';

import { FontAwesome } from '@expo/vector-icons'

export function Home() {
  const navigation = useNavigation();

  const { top } = useSafeAreaInsets();

  function handleReport() {
    navigation.navigate('report');
  }

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.header}>
        <FontAwesome name='list' color='white' size={24} />

        <Image  source={logo} style={styles.logo} />

        <View style={styles.placeholder}/>
      </View>

      <GoogleMaps />

      <TouchableOpacity style={styles.button} onPress={handleReport}>
        <Ionicons name='megaphone' color='white' size={30} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003883'
  },
  header: {
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  placeholder: {
    height: 24,
    width: 24,
  },
  logo: {
    width: 250,
    height: 80,
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: '#f02b2b',
    padding: 15,
    borderRadius: 99999,
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
})