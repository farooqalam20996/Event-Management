import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Routes from './src/routes/AuthRoutes';
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import {Black, Regular, Light, Bold, Thin} from './src/assets/fonts';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/theme/ThemeContext';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default function App() {

  useEffect(()=>{
    example()
  },[])

  const example = async () => {
    try{
        const response = await changeNavigationBarColor('#80b3ff');
        alert(response)// {success: true}
    }catch(e){
        alert(e)// {success: false}
    }

  };
  const [isloading] = useFonts({
    "Black":Black,
    "Bold":Bold,
    "Light":Light,
    "Regular":Regular,
    "Thin":Thin,
  });

  if(!isloading) return <AppLoading/>
  else
    return (
      <>
        <StatusBar animated style="light"/>
        <AppearanceProvider>
          <ThemeProvider>
            <Routes/>
          </ThemeProvider>
        </AppearanceProvider>
      </>
    )
}