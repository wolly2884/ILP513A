import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView,ImageBackground, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL, IMAGE_WIDTH, IMAGE_WIDTH_SMALL } from '../../components/styles/styles';
import ReturnBotao from '../../components/botao/ReturnBotao';

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState(Math.floor(Math.random() * 11));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [result, setResult] = useState(require("../../assets/pensa.gif"));
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const [imageWidth, setImageWidth] = useState(IMAGE_WIDTH);
  const [sound, setSound] = useState();

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
  
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/acertou.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

   async function Errou() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/errou.mp3')
    );
    setSound(sound);
    setText1(' ');
    await sound.playAsync();
  }

  useEffect(() => {
    setResults();
  }, [text1]);

  const keyboardDidShow = () => {
    setImageHeight(IMAGE_HEIGHT_SMALL);
    setImageWidth(IMAGE_WIDTH_SMALL);
  };

  const keyboardDidHide = () => {
    setImageHeight(IMAGE_HEIGHT);
    setImageWidth(IMAGE_WIDTH);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  const setResults = () => {
    if (text1 === '' || isNaN(text1)) {
      setResult(require("../../assets/pensa.gif"));
    } else if (parseInt(text1) === text2) {
      setResult(require("../../assets/acertouV.gif"));
      setText2(Math.floor(Math.random() * 11));
      playSound();
    } else {
      setResult(require("../../assets/errou.gif"));
      Errou();
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
        <Text style={styles.headerText}>Jogo do Nº Aleatorio</Text>
      </View>

      {/* ScrollView no centro */}
      <ScrollView >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView contentContainerStyle={styles.container} extraScrollHeight={-220} enableOnAndroid={true}>
          <Image source={require("../../assets/hq720.jpg")} style={[styles.contorno, { width: imageWidth, height: imageHeight }]} />
          <View>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              label={"Pense em 1 numero de 1 á 10 app"}
              onChangeText={setText1}
            />
            <View style={styles.bordas}>
              <Image source={result} style={styles.img2} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
