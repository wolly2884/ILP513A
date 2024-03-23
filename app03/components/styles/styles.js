import { StyleSheet, Dimensions } from 'react-native';

export const windowDimensions = Dimensions.get('window');
export const screenDimensions = Dimensions.get('screen');

//altura
export const IMAGE_HEIGHT = screenDimensions.height / 3.3;
export const IMAGE_HEIGHT_SMALL = IMAGE_HEIGHT /2;

//Largura
export const IMAGE_WIDTH = screenDimensions.width * 1.151;
export const IMAGE_WIDTH_SMALL = IMAGE_WIDTH /2;

export default styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
container: {
  backgroundColor: '#fff',
  flex: 1,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  contorno:{
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth:1,
  },
  View1: {
    top: 30,
    color: '#333333',
    alignItems: 'left',
    marginBottom: 10,
    paddingHorizontal: 30
  },
  View2: {
    top: 20,
    color: '#333333',
    alignItems: 'center'
  },
  texto: {
    top: 8,
    fontSize:30,
    fontFamily: 'monotype corsiva',
  },
  titulo:{
    fontSize: 30,
    color: 'orange',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 0,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
contador:{
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth:1,
    width: '100%',
    height: 50,
  },
  bordas:{
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    width:  305,
    height: 260,   
  },
  img2:{
    marginTop: -5,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width:  400,
    height: 250,
  },
  textInput:{
    height: 70,
    alignSelf: 'center',
    width: 400,
  },
contorno2:{
    margin: 20,
    marginStart: 15,
    marginEnd: 15,
    width: '90%',
    height: '20%',
    alignSelf: 'center',
  },
botao: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    marginLeft: 30,
  },
  //
logo: {
    width: '100%',
    justifyContent: 'center',
    height: 100, 
    alignSelf: 'center',
  },
logo2: {
    width: '100%',
    height: '30%',
    margin: 10,
  },
  
// retirar depois
  box1:{
    height: 300,
    width: 170,
    borderWidth: 1,
    textAlign: 'center',
  },
  box2:{
    backgroundColor: 'green',
    height: 250,
    width: 150,
  },
  box3:{
    backgroundColor: 'yellow',
    height: 250,
    width: 100,
  },
  box4:{
    backgroundColor: 'blue',
    height: 250,
    width: 100,
  },
  selectedItemContainer: {
    position: 'top',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    width: '100%',
    borderTopColor: '#ccc',
  },
  selectedItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  selectedItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
    title: {
    fontSize: 24,
    marginBottom: 20,
  },
    Background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});