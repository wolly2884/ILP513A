import { View, Button } from 'react-native'
import {styles} from './styles'
import { TextInput } from 'react-native-paper';

function Botao(props){
  return(
    <View style={styles.contorno}>
      <TextInput keyboardType = 'numeric'  label={props.titulo} onChangeText={ props.funcao} />
    </View>
  )
}

export default Botao