import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import ReturnBotao from '../../components/botao/ReturnBotao'
import Inputtxt from '../../components/botao/TextInput'
import styles from '../../components/styles/styles';

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [text1, setText1] = useState(' ');
  const [text2, setText2] = useState(' ');
  const [result, setresult] = useState(' ');

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

  useEffect(() => {
    CheckInput();
  }, [text1, text2] );

  const parse =(valor)=>{
   return parseFloat(valor.replace(',', '.'))
  };

  // Check if the value is null, zero, or NaN
  const IsNullOrZeroOrNaN = (valor) => {
    return  parse(valor) <= 0 || isNaN(parse(valor));
  };

  // Calculate BMI  
  const CheckInput = () => {
    const isValidInput = /^[0-9., ]*$/.test(text1) && /^[0-9., ]*$/.test(text2);
    if (!isValidInput) {
      setresult('Verificar o que foi digitado');
      return;
    } else if (parseFloat(text2) !== 0 && parseFloat(text1) !== 0 && text1 != '' && text2 != '' ) {
      let valor = (parse(text1)  / (parse(text2)  * parse(text2) )).toFixed(1);
         Vantagem(valor);
    } else {
      setresult('');
    }
  };

  // Verifico qual o IMC
  const Vantagem = (valor) => {

    if (IsNullOrZeroOrNaN(valor)) {
      setresult(' ');
      return;
    }

    if (valor <= 18.5) {
      setresult('Abaixo do Peso');
    } else if (valor <= 24.9) {
      setresult('Peso Normal');
    } else if (valor <= 29.9) {
      setresult('Sobrepeso');
    } else if (valor <= 34.9) {
      setresult('Obesidade Grau 1');
    } else if (valor <= 39.9) {
      setresult('Obesidade Grau 2');
    } else {
      setresult('Obesidade Grau 3');
    }
  };


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
        <Text style={styles.headerText}>Calculo do IMC</Text>
      </View>

      {/* ScrollView no centro */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
         
        <View style={{margin:20}}>          
          <Inputtxt titulo="Digite Seu Peso (kg)" funcao={setText1} />
          <Inputtxt titulo="Digite Sua Altura (M)" funcao={setText2} />

          <Text style={{fontSize: 30, margin: 10, textAlign: 'center'}}>  Resultado </Text>      
          <Text style={{fontSize: 30, textAlign: 'center', margin: 10, borderWidth: 1, backgroundColor: 'white'}}> {result} </Text>
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
