import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Botao from '../../components/botao/botao'
import ReturnBotao from '../../components/botao/ReturnBotao'
import styles from '../../components/styles/styles';

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [number, setNumber] = useState(0);

  useFocusEffect(
     React.useCallback(() => {
      const checkLoginStatus = async () => {
        try {
          const value = await AsyncStorage.getItem('isLoggedIn');
          if (value !== null && value === 'true') {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Erro ao recuperar o estado de login:', error);
        }
      };

      checkLoginStatus();
    }, [navigation])
  );
  
  const Diminui = () => { 
    setNumber(test(number - 1));
  }

  const Aumenta = () => {
    setNumber(test(number + 1));
  }

  const test = (number) => {
    if(number < 0 ){
      number = 0;
    }
    return number;
  }

  const Zerar = () => {
    setNumber(0);
  }

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Acesso Negado</Text>
        <View style={styles.footer}>
          <ReturnBotao nav={navigation} margem={1} margemdireita='-80%' />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
            <ImageBackground  source={imagemBackground} style={styles.container}>

      {/* View estática no topo */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Contador de Pessoas</Text>
      </View>

      {/* ScrollView no centro */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contador}>
          <Text style={styles.texto}>{number}</Text>
        </View>

        <View style={styles.botao}>
          <Botao titulo='+' cor='green' estilo='center'  funcao={Aumenta}  />
          <Botao titulo='-' cor='red'   estilo='center'  funcao={Diminui}  />      
        </View>
        
        <View>
          <Botao estilo='center' titulo='Zerar' cor='black' funcao={Zerar}  />
        </View>
      </ScrollView>

      {/* View estática no rodapé */}
      <View style={styles.footer}>
          <ReturnBotao nav={navigation} lfuncao='true' margem={1} margemdireita='-80%' />
      </View>
      </ImageBackground>
    </View>
  );
};

export default App;
