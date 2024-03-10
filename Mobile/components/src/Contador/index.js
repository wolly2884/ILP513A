
import {useState} from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,Image} from 'react-native';
import { ImageBackground } from 'react-native';
import {styles} from './styles'
import Botao from './botao/botao'

function contador(){
  const [number, setNumber] = useState(0)

  function Diminui() { 
    setNumber((test(number - 1)))
  }

  function Aumenta() {
    setNumber((test(number + 1)))
  }

  function test(number){

    if(number < 0 ){
      number = 0 
      }
    return number
  }

  function Zerar(){
    setNumber(0)
  }

  return(

        <View>
         
      <Text style={styles.texto1}>
        Contador de Pessoas
      </Text>
      <SafeAreaView>
       <Text style={styles.contador}>{number}</Text>
      </SafeAreaView>

      <View style={styles.container}>
      
      </View>
      <View >
          <Botao titulo='Aumenta' cor='green' funcao={Aumenta}  />
          <Botao titulo='Diminui' cor='red' funcao={Diminui}    />
          <Botao titulo='Zerar' cor='black' funcao={Zerar}    />
      </View>

    </View>
  )
}
export default contador