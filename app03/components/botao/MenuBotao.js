import { View,  TouchableOpacity,Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Botao(props){
   const funcao = props.lfuncao ?  ()=> props.nav.navigate(props.menu) : props.funcao 
   console.log(props.lfuncao);
  return(
    <View>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.background} />
        <LinearGradient colors={['white', 'green']}
            start={[0,1]} style={{ margin: 10,  borderRadius: 20,  width: 150, height: 70, alignItems: 'center', alignSelf: 'center'}}>
            <View style={{alignSelf:props.estilo}}>
              <TouchableOpacity onPress={funcao} > 
                <View style={{borderWidth: 2,  borderRadius: 20,  width: 150, height: 70, alignItems: 'center', alignSelf: 'center',}}> 
                  <Text style={{textAlign: 'center', textAlignVertical: 'center', margin: 5, fontSize: 20,color: 'white', justifyContent: 'center'}}>  {props.titulo}</Text>
                </View>
              </TouchableOpacity>
            </View>
      </LinearGradient>
    </View>

  )
}

export default Botao;