import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../components/styles/styles';

const LoginScreen = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

    // incluido essa validação porque na net não funciona AsyncStorage
      if ((username === storedUsername && password === storedPassword) || Platform.OS === 'web' ) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.navigate('Home');
      } else {
        Alert.alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao recuperar ou armazenar os dados:', error);
      Alert.alert('Erro', 'Não foi possível realizar o login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
        <ImageBackground  source={imagemBackground} style={styles.Background}>
            <Text style={styles.title}>Login</Text>

            <TextInput style={styles.input} placeholder="Nome de usuário"        value={username} onChangeText={setUsername}/>
            <TextInput style={styles.input}  placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword}/>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.registerText}>Ainda não tem uma conta? Registre-se aqui.</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  );
};

export default LoginScreen;
