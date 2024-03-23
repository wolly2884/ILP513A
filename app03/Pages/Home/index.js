import {View, ScrollView,Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Botao from '../../components/botao/MenuBotao'
import Logout from '../../components/botao/botao'
import styles from '../../components/styles/styles';

const App = ({navigation}) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const checkLoginStatus = async () => {
        try {
          const value = await AsyncStorage.getItem('isLoggedIn');
          if (value !== null && value === 'true') {
            setIsLoggedIn(true);
          } else {
            navigation.navigate('Login');
          }
        } catch (error) {
          console.error('Erro ao recuperar o estado de login:', error);
        }
      };

      checkLoginStatus();
    }, [navigation])
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao remover o estado de login:', error);
    }
  };

  if (!isLoggedIn) {
    return null; // ou exiba uma tela de carregamento
  }
  
  return (
    <View style={styles.container}>
            <ImageBackground  source={imagemBackground} style={styles.Background}>

      <View style={[styles.header,{backgroundColor: 'transprent'}]}>
        <Image  source={require("../../assets/LogoPs.png")}   style={{width:300, height:40}} />
      </View>

        <ScrollView contentContainerStyle={[styles.scrollViewContent, {}]}>    
            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1,  flexWrap: 'wrap',
              alignItems: 'flex-start'}}>
              <Botao titulo='Meu Perfil Profissional'       menu='#App 01: Meu Perfil Profissional'   lfuncao={true}  nav={navigation}/>
              <Botao titulo='Contador de Pessoas'           menu='#App 02: Contador de Pessoas'       lfuncao={true} nav={navigation}/>
              <Botao titulo='Multiplicador de Numeros'      menu='#App 03: Multiplicador de Numeros'  lfuncao={true} nav={navigation}/>
              <Botao titulo='Alcool ou Gasolina'            menu='#App 04: Alcool ou Gasolina'        lfuncao={true} nav={navigation}/>
              <Botao titulo='Calculo do IMC'                menu='#App 05: Calculo IMC'               lfuncao={true} nav={navigation}/>
              <Botao titulo='Jogo Nº Aleatorio'             menu='#App 06: Jogo Aleatorio'            lfuncao={true} nav={navigation}/>
              <Botao titulo='Anúncios para venda'           menu='#App 07: Anúncios para venda'       lfuncao={true} nav={navigation}/>
              <Botao titulo='Vagas de emprego de TI'        menu='#App 08: Vagas de emprego de TI'    lfuncao={true} nav={navigation}/>
            </View>
        </ScrollView>
        
      <Botao titulo='Logout' cor='green' estilo='center' lfuncao={false} funcao={handleLogout}  />

      </ImageBackground >
      <View style={[styles.footer,{margin: 20}]}>
        <Image source={require("../../assets/logotipo1.png")} style={{width:330, height:70}} />
      </View>
    </View>
  );
};

export default App;

