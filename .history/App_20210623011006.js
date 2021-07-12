// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/AuthRoutes';
import { isloading } from './src/assets/fonts';
import { AppLoading  } from "expo";

export default function App() {

  if(!isloading) return <AppLoading/>
  else
    return (
      <Routes/>
    )
}