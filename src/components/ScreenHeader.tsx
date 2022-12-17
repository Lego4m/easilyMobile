import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenHeaderProps = {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  const navigation = useNavigation();
  
  const { top } = useSafeAreaInsets();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={[styles.container, { paddingTop: top + 24 }]}>
      <TouchableOpacity onPress={goBack}>
        <AntDesign 
          color='white' 
          size={24} 
          name='arrowleft'
        />
      </TouchableOpacity>

      <Text style={styles.text}>
        {title}
      </Text>

      <View style={styles.placeHolder} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#003881',
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  placeHolder: {
    height: 24,
    width: 24,
  }
});