import { View, TouchableOpacity,Text } from 'react-native'

function Botao(props){
  return(
    <View style={{alignSelf:props.estilo}}>
      <TouchableOpacity style={{
            resizeMode: 'contain',
            marginTop: 20,
            marginRight: 30,
            borderWidth:1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            borderRadius: 200,          
            backgroundColor: props.cor,
         }} onPress={props.funcao} > 
         
        <Text style={{color: 'white', 
                      fontSize: 30, 
                      fontWeight: 'bold'}}>
            {props.titulo}
          </Text>
          
      </TouchableOpacity>
    </View>
  )
}

export default Botao;