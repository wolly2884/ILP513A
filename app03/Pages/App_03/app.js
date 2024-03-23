import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import ReturnBotao from '../../components/botao/ReturnBotao'
import Inputtxt from '../../components/botao/TextInput'
import styles from '../../components/styles/styles';

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const [text1, setText1] = useState( '');
  const [text2, setText2] = useState('');
  const [respo, setResposta] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// Valido se esta logado ao entrar na rotina 
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
 
 // Caso tenha uma alteração  em algum campo verificado o que foi digitado
 useEffect( () => {
    CheckInput();
  }, [text2,text1]);

// função para verifica se o que foi digitado e um numerico
// para validar caso venha da web que apresenta teclado alfa-numerico
  const CheckInput = () => {
    const isValidInput = /^[0-9., ]*$/.test(text1) && /^[0-9., ]*$/.test(text2);
    if (!isValidInput) {
      setResposta('Verificar o que digitado');
    } else if (parseFloat(text2) !== 0 && parseFloat(text1) !== 0 && text1 != '' && text2 != '' ) {
      setResposta(parseFloat(text1.replace(',', '.')) * parseFloat(text2.replace(',', '.')));
    } else {
      setResposta('');
    }
  };
  
  //Valido se esta logado
  //Caso não apresento botaão de Retorno
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
          <Text style={styles.headerText}>Multiplicador de Numeros</Text>
        </View>

        {/* ScrollView no centro */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
    
          <View style={{margin:20}}>
            <Inputtxt titulo="Digite o Primeiro Numero"  funcao={setText1}  />
            <Inputtxt titulo="Digite o Segundo Numero"   funcao={setText2}  />

            <Text style={{fontSize: 30, margin: 10, textAlign: 'center'}}>  Resultado </Text>      
            <Text style={{fontSize: 30, textAlign: 'center', margin: 10, borderWidth: 1, backgroundColor: 'white'}}> {respo} </Text>
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