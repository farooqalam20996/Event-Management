import React, { useContext, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Row from '../../components/common/Row';
import { useNavigation } from '@react-navigation/native';
import { settingItems } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from "@expo/vector-icons";
import { lightGray, primary } from '../../assets/colors';
import AuthContext from '../../redux/Context';
import AwesomeAlert from "react-native-awesome-alerts";
import { ThemeContext } from '../../theme/ThemeContext';

const Settings = () => {

    const [isVisible, SetIsVisible] = useState(false);

    const navigation = useNavigation();
    const context = useContext(AuthContext)

    const {colors} = useContext(ThemeContext)

    const LogOut =async () => {
        await AsyncStorage.removeItem("user")
        context.updateState()
    }

    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {settingItems.map(item=>
                <View key={item.id}>
                    <Row 
                        text={item.text}
                        iconLeft={item.iconLeft}
                        onPress={()=>navigation.navigate("CommonNavigator", {screen: item.action})}    
                    />
                </View>
            )}
            <TouchableOpacity onPress={()=> SetIsVisible(true)} style={styles.container} >
                <Ionicons name={"exit"} size={18} color={primary} style={{marginRight:10}} />
                <Text style={{ fontFamily:"Regular", fontSize:14, color:colors.text}} > Logout </Text>
            </TouchableOpacity>
            <AwesomeAlert 
                show={isVisible}
                title="Logout"
                titleStyle={{fontSize:16,lineHeight:20,fontFamily:"Bold",color:'black', }}
                message="Are You Sure To Logout"
                messageStyle={{ fontSize:14, lineHeight:20, fontFamily:"Regular", color:'black' }}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={true}
                cancelButtonStyle={{ backgroundColor:primary }}
                cancelButtonTextStyle={{ fontSize:13,lineHeight:16,fontFamily:"Regular",color:"white", }}
                showConfirmButton={true}
                confirmButtonStyle={{ backgroundColor:primary }}
                confirmButtonTextStyle={{ fontSize:13,lineHeight:16,fontFamily:"Regular",color:"white", }}
                cancelText="No, cancel"
                confirmText="Yes, Sign Out!"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => SetIsVisible(false)}
                onConfirmPressed={LogOut}
                contentContainerStyle={{ backgroundColor:"white", width:"80%" , height:150 }}
            
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"flex-start", 
        borderTopColor:lightGray, 
        borderTopWidth:1, 
        padding:hp('1.5%')
    }
});
export default Settings;
