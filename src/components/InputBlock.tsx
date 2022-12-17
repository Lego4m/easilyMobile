import { View, TextInput, StyleSheet, Text } from 'react-native';

type InputBoxProps = {
  title: string;
}

export function InputBlock({ title }: InputBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        {title}
      </Text>

      <TextInput 
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
  },
  textTitle: {
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 8,
  }
});