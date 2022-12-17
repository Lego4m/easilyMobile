import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import { InputBlock } from '../../components/InputBlock';
import { ScreenHeader } from '../../components/ScreenHeader';
import  OpenCamera from '../../components/OpenCamera';

export function Report() {

  return (
    <View style={styles.container}>
      <ScreenHeader
        title='Reportar problema'
      />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}
      >
        <InputBlock title='Qual é o problema?' />
        <InputBlock title='Local' />
        <OpenCamera/>
        <TouchableOpacity style={[styles.button, styles.buttonImage]}>
          <FontAwesome name='folder-open' color='#003881' size={20} />
          <Text style={[styles.buttonText, styles.buttonImageText]}>Inserir imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 'auto' }]} >
          <Text style={[styles.buttonText, { fontWeight: 'bold', marginLeft: 0 }]}>Reportar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#003881',
    paddingBottom: 24,
  },
  headerText: {
    marginTop: 24,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    // padding: 20,
    // flex: 1,
  },
  button: {
    backgroundColor: '#003881',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },
  buttonText: {
    marginLeft: 8,
    color: "white",
  },
  buttonImage:{
    color: '#003881',
    borderWidth: 2,
    borderColor:'#003881',
    backgroundColor:'white',
  },
  buttonImageText:{
    color: '#003881',
    border:'2px solid',
    borderColor:'red',
    backgroundColor:'white',
  },
  camera: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
})