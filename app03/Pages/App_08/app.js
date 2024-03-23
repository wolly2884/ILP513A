import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import {Vagas} from './vagas'
import ReturnBotao from '../../components/botao/ReturnBotao';

const App = ({ navigation }) => {
  let imagemBackground = { uri: "https://static8.depositphotos.com/1014889/903/i/450/depositphotos_9038776-stock-photo-summer-ocean.jpg" }

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

  const renderJobItem = (job) => (
    <TouchableOpacity key={job.vagaId} style={styles.jobItem}>
      <Text style={styles.jobTitle}>{job.empresa}</Text>
      <Text style={styles.jobCompany}>{job.nome}</Text>
      <Text style={styles.jobLocation}>{job.descricao}</Text>
      <Text style={styles.jobSalary}>{job.salario}</Text>
      <Text style={styles.jobSalary}>{job.contato}</Text>
    </TouchableOpacity>
  );
  
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
        <Text style={styles.headerText}>Vagas de Emprego</Text>
      </View>

        {/* ScrollView no centro */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {Vagas.map((Vagas) => renderJobItem(Vagas))}
        </ScrollView>

      {/* View estática no rodapé */}
      <View style={styles.footer}>
         <ReturnBotao nav={navigation} lfuncao='true' margem={1} margemdireita='-80%' />
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  jobItem: {
    width: '90%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  jobLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
