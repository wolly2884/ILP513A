import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import ReturnBotao from '../../components/botao/ReturnBotao';
import styles from '../../components/styles/styles';
import { SellItem } from './SellItem'; 
import { useAuth } from '../../components/useAuth/useAuth'; // Importando o hook 

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

const [selectedItem, setSelectedItem] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useFocusEffect(
    React.useCallback(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value !== null && value === 'true') {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Erro ao recuperar o estado de login:', error);
      }
    };

      checkLoginStatus();
    }, [navigation])
  );
  
  const renderSellItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.box1, { borderRadius: 10, marginRight: 10 }]}
      onPress={() => handleItemPress(item)}
    >
      <Text style={styles.selectedItemPrice}>{item.price}</Text>
      <Image source={item.img} style={{ width: 100, height: 100, margin: 25 }} />
      <Text style={styles.selectedItemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

 if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Acesso Negado</Text>
        <View style={styles.footer}>
          <ReturnBotao nav={navigation} margem={1} margemdireita='-80%' />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground  source={imagemBackground} style={styles.container}>

      {/* View estática no topo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Anúncios para Venda</Text>
      </View>

      {/* ScrollView no centro */}
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}>
          {SellItem.map((item) => renderSellItem(item))}
        </View>
      </ScrollView>

      {/* View para exibir detalhes do anúncio selecionado */}
      <View style={{marginRight: 20}}>
      {selectedItem && (
        <View style={styles.selectedItemContainer}>
          <Text style={styles.selectedItemPrice}>{selectedItem.price}</Text>
          <Image source={selectedItem.img} style={{ width: 150, height: 150 }} />
          <Text style={styles.selectedItemTitle}>{selectedItem.title}</Text>
        </View>
      )}
      </View>
      {/* View estática no rodapé */}
      <View style={styles.footer}>
        <ReturnBotao nav={navigation} lfuncao='true' margem={1} margemdireita='-80%' />
      </View>
      </ImageBackground>
    </View>
  );
};

export default App;