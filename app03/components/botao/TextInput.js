import { View} from 'react-native'
import styles from '../styles/styles'
import {TextInput} from 'react-native-paper';

function Botao(props){
  return(
    <View style={styles.contorno2}>
      <TextInput keyboardType = 'numeric'  label={props.titulo} onChangeText={ props.funcao} />
    </View>
  )
}

export default Botao