import {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Inputtxt from '../TextoInput/index'

function Checktxet(text1, text2){ 
  if(number1(text1) > 0  && number1(text2) > 0 ){
      return respo = text1 * text2
  }else{
    alert('Favor verificar o numero digitado')
    return respo = 0 
  }
  
}

function number1(text){
  for (var i=0; i < text.length; i++) {

    switch(text.substr(i,1)) {

      case '1':
        break;

      case '2':
        break;

      case '3':
        break;

      case '4':
        break;
      
      case '5':
        break;

      case '6':
        break;
      
      case '7':
        break;

      case '9':
        break;

      case '8':
        break;

      case '0':
        break;
    
    case ' ':
        break;

      default:   
        return 0   
      }
  }
  return 1
}

function valid(text){

  if(number1(text) > 0){
    
      return text
  }else{
     setText1(0)
  }
   
}

const calculadora = () => {
  const [text1, setText1] = useState(' ');
  const [text2, setText2] = useState(' ');
  const [respo, resposta] = useState(0);

 useEffect( () => {
    resposta(Checktxet(text1, text2))
  }, [text2,text1]);

  return (
  <View>
    <View >
      <Text style={styles.titulo}> Multiplicador de Numeros</Text>
    </View>
    
    <View>
      <Inputtxt titulo="Digite o Primeiro Numero"  funcao={setText1}  />
      <Inputtxt titulo="Digite o Segundo Numero"   funcao={setText2}  />
      <Text style={styles.texto}>Resultado </Text>  
      <View style={styles.contorno} />
      <Text style={styles.result}>{respo} </Text>  
    </View>
   </View>
  );
};

export default calculadora;
