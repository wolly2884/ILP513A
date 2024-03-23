import React from 'react';
import { Platform }               from 'react-native';
import { NavigationContainer }    from '@react-navigation/native';
import { createStackNavigator }   from '@react-navigation/stack';
import { createDrawerNavigator }  from '@react-navigation/drawer';
import { useAuth }                from './components/useAuth/useAuth'; // Importando o hook 

//Login
import LoginScreen  from './Pages/Login/Login';
import Cadastro     from './Pages/Login/Cadastro'

// Pages
import Home         from './Pages/Home/index';
import App_01       from './Pages/App_01/index';
import App_02       from './Pages/App_02/app';
import App_03       from './Pages/App_03/app';
import App_04       from './Pages/App_04/app';
import App_05       from './Pages/App_05/app';
import App_06_web   from './Pages/App_06/web';
import App_06_app   from './Pages/App_06/app';
import App_07       from './Pages/App_07/app';
import App_08       from './Pages/App_08/app';

const Drawer = createDrawerNavigator();

export default function App({navigation}) {
  const App_06 = Platform.OS === 'web' ? App_06_web : App_06_app;
   const { isLoggedIn, logout } = useAuth(); // Utilizando o hook useAuth

 function handleLogout() {
      const success = logout(); // Usando a função logout do hook useAuth
      return <LoginScreen />;
    };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login"                              component={LoginScreen} />
        <Drawer.Screen name="Cadastro"                           component={Cadastro} />
        <Drawer.Screen name="Home"                               component={Home}   options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 01: Meu Perfil Profissional"   component={App_01} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 02: Contador de Pessoas"       component={App_02} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 03: Multiplicador de Numeros"  component={App_03} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 04: Alcool ou Gasolina"        component={App_04} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 05: Calculo IMC"               component={App_05} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 06: Jogo Aleatorio"            component={App_06} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 07: Anúncios para venda"       component={App_07} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="#App 08: Vagas de emprego de TI"    component={App_08} options={({ navigation }) => ({drawerLockMode: 'locked-closed' })} />
        <Drawer.Screen name="Logout"                             component={handleLogout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
