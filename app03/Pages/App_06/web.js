import { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import ReturnBotao from '../../components/botao/ReturnBotao'
import styles from '../../components/styles/styles';
import { useAuth } from '../../components/useAuth/useAuth'; // Importando o hook 

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

  const { isLoggedIn } = useAuth(); // Utilizando o hook useAuth

  const [nNumero, setDigitado]     = useState(0); 
  const [nAliatorio, setAliatorio] = useState(Math.floor(Math.random() * 11));
  const [imgResposta, setImagem]   = useState(require("../../assets/pensa.gif")); 

  useEffect(() => {
    setResults(); 
  }, [nNumero]);

  const setResults = () => {
    if (nNumero === '' || isNaN(nNumero)) { 
      setImagem(require("../../assets/pensa.gif"));
    } else if (parseInt(nNumero) === nAliatorio) { 
      setImagem(require("../../assets/acertou.gif"));
      setAliatorio(Math.floor(Math.random() * 11)); 
    } else {
      setImagem(require("../../assets/errou.gif"));
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
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={-130} enableOnAndroid={true}>
      <ImageBackground  source={imagemBackground} style={styles.container}>

        <View style={styles.inner}>
          <View>
            <Text style={styles.titulo}>Jogo do Nº Aleatorio</Text>
          </View>
          <Image source={require("../../assets/hq720.jpg")} style={styles.contorno} />
          <View>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              label={"Pense em 1 numero de 1 á 10 web"}
              onChangeText={setDigitado}
            />
            <View style={styles.bordas}>
              <Image source={imgResposta} style={styles.img2} />
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'center', flex: 1}}>
          <ReturnBotao nav={navigation} lfuncao='true' margem={1} margemdireita='-80%' />
        </View>
      </ImageBackground>

    </KeyboardAwareScrollView>
  );
};

export default App;
