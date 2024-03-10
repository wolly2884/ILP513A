import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import calculadora from './components/src/calculadora/index'
import home from './components/src/home/index'
import contador from './components/src/Contador/index'
import vantagem from './components/src/Vantagem/index'
import Imc from './components/src/imc/index'
import jogo from './components/src/jogo/index'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={home} />
        <Drawer.Screen name="Calculadora" component={calculadora} />
        <Drawer.Screen name="Contador de Pessoas" component={contador} />
        <Drawer.Screen name="Alcool ou Gasolina" component={vantagem} />
        <Drawer.Screen name="Calculo IMC" component={Imc} />
        <Drawer.Screen name="Jogo Aleatorio" component={jogo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
