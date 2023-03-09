import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground, Button, View, Text, TextInput, TouchableOpacity} from 'react-native';


const Login = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HomePage');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  function handleUsername(text) {
    setUsername(text);
  }
  
  function handlePassword(text) {
    setPassword(text);
  }


  const fazerLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          "usuario": "flavio.freitas" ,
          "senha": "elgin222"  
        })
      });

      if (response.status === 200) {
        navigation.navigate('HomePage');
      } else {
        alert('Login inválido. Tente novamente.');
      }
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao fazer login. Tente novamente.');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <ImageBackground source={require('./carlos.png')} style={styles.image} />
        <View style={styles.inputBox}>
        <TextInput onChangeText={handleUsername} value={username} style={styles.input}/>
          <Text style={styles.label}>Usuario</Text>
        </View>
        <View style={styles.inputBox}>
        <TextInput onChangeText={handlePassword} value={password} style={styles.input} secureTextEntry={true} />
          <Text style={styles.label}>Senha</Text>
        </View>
        <Button title="LOGIN" color="#198754" borderRadius="10"  
          onPress={handlePress}
          /> 
      </View>
    </View> 
  );
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#095446',
  },
  loginBox: {
    width: 350,
    padding: 40,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 25,
    elevation: 10,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputBox: {
    position: 'relative',
    width: '100%',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    left: 39,
    paddingVertical: 5,
    paddingHorizontal: 0,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#BBBBBB",
  },

  image: {
    width: 80,
    height: 80,
    top: -25,
  },
  
  label: {
    position: 'absolute',
    top: -35,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 0,
    fontSize: 16,
    color: 'black',
    opacity: 0.5,
  },
});

export default Login;


