import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        setIsLoggedIn(value === 'true');
      } catch (error) {
        console.error('Erro ao recuperar o estado de login:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const login = async (username, password) => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro ao recuperar ou armazenar os dados:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      return true;
    } catch (error) {
      console.error('Erro ao remover o estado de login:', error);
      return false;
    }
  };

  return { isLoggedIn, login, logout };
};
