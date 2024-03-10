import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    top: '10%',
    alignSelf: 'center'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '20%',
    fontSize: 16,
  },
  texto: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 60,
    fontFamily: 'Monotype Corsiva',
   borderRightColor:'black',
   color: 'white',
   top:'10%'
  },
  texto1: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Monotype Corsiva'
  },
   botao: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  touchableOpacityStyle: {
    position: 'absolute',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    right: '30%',
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  contorno:{
    borderWidth:1,
    marginTop: 10,
    height:35,
    width: '50%',
    alignSelf: 'center'
  },
    titulo:{
    fontSize: 30,
    color: 'orange',
    marginTop: 20,
    textAlign: 'center'
  },

  contador:{
    fontSize: 60,
    color: 'purple',
    marginTop: 20,
    textAlign: 'center',
    borderWidth:1,
    width: '40%',
    alignSelf: 'center',
  }
});
