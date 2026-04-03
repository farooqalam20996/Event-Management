import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { gray, primary } from '../../assets/colors';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons} from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { EventImg1 } from '../../redux/action/CreateEvent_Action';

export default function ImagePickerExample({selectImg, style,  OnImagePick}) {
  const [image, setImage] = useState(selectImg);
  
  const dispatch  = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // dispatch(EventImg1(result.uri, imagesArr ))
      OnImagePick(result.uri)
    }
  };

  return (
    <TouchableOpacity style={[styles.Container, {...style}]} onPress={pickImage} >
        {!image && <Ionicons size={hp("3%")} color={"white"} name="add-circle" />}
        {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius:hp("0.8%") }} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:gray,
        width:hp("8%"),
        height:hp("8%"),
        borderRadius:hp("0.8%"),
        alignItems:"center",
        justifyContent:"center",
    }
});