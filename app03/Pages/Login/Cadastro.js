import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../components/styles/styles';

const RegisterScreen = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      console.error('Erro ao armazenar os dados:', error);
      Alert.alert('Erro', 'Não foi possível realizar o cadastro. Tente novamente.');
    }
  };

  return (
      <View style={styles.container}>
       <ImageBackground  source={imagemBackground} style={styles.Background}>

          {/* View estática no topo */}
          <View >
              <Text style={styles.title}>Cadastro</Text>
          </View>

          <TextInput placeholder="Nome de usuário" style={styles.input} value={username}  onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntryvalue={password} onChangeText={setPassword} />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
     
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
