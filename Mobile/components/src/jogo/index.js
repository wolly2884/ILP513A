import {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {styles} from './styles'
import Inputtxt from '../TextoInput/index'

function Vantagem(valor1, valor2){
  if (valor1 == 0 || valor1 == ' ' ){
    return require("./image/pensa.gif")
  }else if (valor1 == valor2){
    return require("./image/acertou.png")
  } else{
     return require("./image/errou.gif")
  }
}

function atualiza(valor1, valor2){

  if (valor2 == 0 && valor2 == ' ' ){
    return Math.floor(Math.random() * 11)
  }else if (valor1 == valor2){
    return Math.floor(Math.random() * 11)
  } else{
     return valor2
  }
}
const calculadora = () => {
  const [text1, setText1]   = useState(0);
  const [text2, setText2]   = useState(Math.floor(Math.random() * 11));
   const item= {
    image: require("./image/hq720.jpg"),
    location: "Chennai",
    status: 1,
    projectId: 1
}
const [result, setresult] =  useState(item.image);


useEffect( () => {
    setresult(Vantagem(text1, text2))
    setText2(atualiza(text1, text2))
  }, [text1]);

  return (
  <View>
    <View >
      <Text style={styles.titulo}>Jogo do Numero Aleatorio</Text>
    </View>
       <Image source={item.image} style={styles.contorno}  />
    <View>
        
    </View>

    <View>
      <Inputtxt titulo="Pense em 1 numero de 1 á 10"      funcao={setText1}  />
    
      <Text style={styles.texto} > Resultado </Text>  
      <View style={styles.contorno}>
        <Image source={result} style={styles.contorno}  />
      </View>
    </View>
   </View>
  );
};

export default calculadora;
