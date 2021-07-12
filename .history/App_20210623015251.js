// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/AuthRoutes';
import { AppLoading  } from "expo";
import { useFonts } from "@use-expo/font";


export default function App() {

  // const [isloading] = useFonts({
  //   "Black":require('./src/assets/fonts/Lato-Black.ttf'),
  //   "Bold":require('./src/assets/fonts/Lato-Bold.ttf'),
  //   "Light":require('./src/assets/fonts/Lato-Light.ttf'),
  //   "Regular":require('./src/assets/fonts/Lato-Regular.ttf'),
  //   "Heavy":require('./src/assets/fonts/Lato-Thin.ttf'),
  // });

  // if(!isloading) return <AppLoading/>
  // else
    return (
      <Routes/>
    )
}