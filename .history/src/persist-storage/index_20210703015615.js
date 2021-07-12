import { AsyncStorage } from "react-native";

export const setItem = async (key,value) => {
    await AsyncStorage.setItem(
        key,
        JSON.stringify(value),
        (err)=>err ? false : true,
    );
}

export const removeItem = async (key) => {
    await AsyncStorage.removeItem(key);
}

export const getItem = async (key) => {
    await AsyncStorage.getItem(
        key,
        (err,item) => {return item}
    );
}