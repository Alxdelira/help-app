import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import LogoHelp from './assets/hel-button.png'
import LogoForm from './assets/logoHelp.png'
import { useState } from 'react';

export default function App() {

  const [help, setHelp] = useState(false)

  async function handlerHelp() {
    setHelp(!help)
  }
  return (
    <>{help ? <View style={styles.containerOn}>
      <TouchableOpacity onPress={handlerHelp}>
        <Image
          source={LogoHelp}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
      :
      <View style={styles.containerForm}>
        <Image source={LogoForm} style={{ width: 240, height: 240 }} />
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          placeholder='Digite seu nome'
          onChangeText={(text) => console.log(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          placeholder='(00) 00000-0000'
          onChangeText={(text) => console.log(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Detalhes:</Text>
        <TextInput
          onChangeText={(text) => console.log(text)}
          style={styles.inputDetail}
          multiline={true}
          numberOfLines={8}
        />
        <TouchableOpacity
          onPress={handlerHelp}
          style={styles.button}
        >
          <Text
          style={styles.textButton}
          >Enviar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    }
    </>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start'
  },
  inputDetail: {
    width: '100%',
    height: 180,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top'
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0000FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
