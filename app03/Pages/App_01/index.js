import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState }                     from 'react';
import styles                                             from '../../components/styles/styles';
import ReturnBotao                                        from '../../components/botao/ReturnBotao';
import AsyncStorage                                       from '@react-native-async-storage/async-storage';
import { useFocusEffect }                                 from '@react-navigation/native';

const App = ({ navigation }) => {
  let cNome = 'Anderson Abrahão Tome';
  let cForm = '4 Semestre do Curso de ADS Fatec Praia Grande';
  let cExpe = 'Anlista de Suporte ao Cliente 12 anos na Totvs S.A.\nSuporte ao Cliente 3 anos no Instituto do Cancer';
  let cProj = 'Meu Primeiro APP';
  let img = require("../../assets/foto.jpg");
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
            setIsLoggedIn(false);
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
      await AsyncStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
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

        <View style={styles.header}>
          <Text style={styles.headerText}>Meu Primeiro App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.View2}>
            <Image source={img} style={styles.img} />
          </View>
          <View style={styles.View1}>
            <Text style={styles.texto}>Dados Pessoais</Text>
            <Text>{cNome}</Text>
          </View>
          <View style={styles.View1}>
            <Text style={styles.texto}>Formação</Text>
            <Text>{cForm}</Text>
          </View>
          <View style={styles.View1}>
            <Text style={styles.texto}>Experiência</Text>
            <Text>{cExpe}</Text>
          </View>
          <View style={styles.View1}>
            <Text style={styles.texto}>Projetos:</Text>
            <Text>{cProj}</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <ReturnBotao nav={navigation} lfuncao='true' margem={1} margemdireita='-80%' />
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
