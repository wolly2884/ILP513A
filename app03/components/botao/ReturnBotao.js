import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

function Botao(props){
  return(
      <View style={{alignSelf: 'center', flex: 1, margin: props.margem, marginRight: props.margemdireita}}>
        <TouchableOpacity 
          onPress={()=> props.nav.navigate('Home')} > 
        
          <Image source={require("../../assets/Retorno.png")} style={{
            width: 50,
            height: 50,
            borderWidth:1,
            borderRadius:200, 
          }} />
            
        </TouchableOpacity>
      </View>
  )
}

export default Botao;