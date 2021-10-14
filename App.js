import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/AuthRoutes';
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import {Black, Regular, Light, Bold, Thin} from './src/assets/fonts';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/theme/ThemeContext';
import {Provider} from "react-redux";
import store from "./src/redux/store/store"
import * as Notifications from "expo-notifications";
import { isReadyRef } from './src/redux/Navigator';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export default function App() {
  
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('noti ',notification)
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("res",response);
    });
   
    return() =>{
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);

      isReadyRef.current = false  
    };

  },[]);


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
        <Provider store={store} >
          <StatusBar animated style="light"/>
          <AppearanceProvider>
            <ThemeProvider>
              <Routes/>
            </ThemeProvider>
          </AppearanceProvider>
        </Provider>
      </>
    )
}