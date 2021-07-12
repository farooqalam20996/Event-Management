// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/AuthRoutes';
import { isloading } from './src/assets/fonts';
import { AppLoading  } from "expo";

export default function App() {

  const [isloading] = useFonts({
    "Black":require('./src/assets/fonts/Lato-Black.ttf'),
    "Bold":require('./src/assets/fonts/Lato-Bold.ttf'),
    "Light":require('./src/assets/fonts/Lato-Light.ttf'),
    "Regular":require('./src/assets/fonts/Lato-Regular.ttf'),
    "Heavy":require('./src/assets/fonts/Lato-Thin.ttf'),
  });

  if(isloading) return <AppLoading/>
  else
    return (
      <Routes/>
    )
}