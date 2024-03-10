import {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import Inputtxt from '../TextoInput/index'

function Checktxet(text1, text2){ 
  if(number1(text1) > 0  && number1(text2) > 0 ){
      return respo = text1 / (text2 * text2)
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
    
    case ',':
        break;

    case '.':
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

function Vantagem(valor){

 
  if(valor <= 18.5 ){
      return ' '
  }else if(valor > 18.5 && valor <= 24.9 ){
    return 'Abaixo do Peso'
  }else  if(valor >=25  && valor <= 29.9) {
    return 'Peso Normal'
  }else  if(valor >= 30 && valor <= 34.9 ) {
    return 'SobrePeso'
  }else  if(valor >= 35 && valor <= 39.9 ) {
    return 'Obesidade Grau 1'
  }else  if(valor >= 40 ) {
    return 'Obesidade Grau 2'
  }

}

const calculadora = () => {
  const [text1, setText1]   = useState(' ');
  const [text2, setText2]   = useState(' ');
  const [respo, resposta]   = useState(0);
  const [result, setresult] = useState(' ');

 useEffect( () => {
    resposta(Checktxet(text1, text2))
  }, [text2,text1]);

useEffect( () => {
    setresult(Vantagem(respo))
  }, [respo]);

  return (
  <View>
    <View >
      <Text style={styles.titulo}>Calculo do IMC</Text>
    </View>
    
    <View>
      <Inputtxt titulo="Digite Seu Peso"      funcao={setText1}  />
      <Inputtxt titulo="Digite Sua Altura"    funcao={setText2}  />
      <Text style={styles.texto} > Resultado </Text>  
      <View style={styles.contorno} />
      <Text style={styles.result}> {result} </Text>  
    </View>
   </View>
  );
};

export default calculadora;
