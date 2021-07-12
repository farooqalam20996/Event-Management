import { AsyncStorage } from "react-native";

export const setItem = async (key,value) => {
    await AsyncStorage.setItem(
        key,
        value,
        (err)=>err ? false : true,
    );
}

export const removeItem = async (key) => {
    await AsyncStorage.removeItem(key);
}

export const getItem = async (key) => {
    return await AsyncStorage.getItem(
        key,
        (err,item) => item
    );
}