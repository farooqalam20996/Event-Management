import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import { black, gray, primary } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';
import MessageCard from '../../components/messages/MessageCard';
import SimpleHeader from '../../components/common/SimpleHeader';
import {Ionicons, FontAwesome} from "@expo/vector-icons";

const data1 = {
    image: '',
    text: "Lorem ipsum dolor sit amet.",
    createdAt: 1628269383,
}
const data2 = {
    image: '',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus tellus augue.",
    createdAt: 1628269383,
}
const data3 = {
    image: '',
    text: "Lorem ipsum dolor sit amet, ",
    createdAt: 1628269383,
}
const data4 = {
    image: '',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus tellus augue. consectetur adipiscing elit. Donec faucibus tellus augue. consectetur adipiscing elit. Donec faucibus tellus augue.",
    createdAt: 1628269383,
}
const data5 = {
    image: '',
    text: "Lorem ipsum dolor sit amet,",
    createdAt: 1628269383,
}


const ChatRoom = () => {

    const { colors } = useTheme();
    return(
        <Container
            style={{justifyContent:"space-between", padding:0}}
        >
            <SimpleHeader
                backIcon
                heading={"Robin Davidson"}
                style={{margin:hp("3%")}}
            />
            <Text style={[styles.subHeader]}>Rave Party</Text>
            <View style={{flex:1, paddingHorizontal:hp("2%")}} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <MessageCard side={"left"} data={data1}/>
                    <MessageCard side={"right"} data={data2}/>
                    <MessageCard side={"left"} data={data3}/>
                    <MessageCard side={"right"} data={data4}/>
                    <MessageCard side={"right"} data={data5}/>   
                </ScrollView>
            </View>
            <InputComp />
        </Container>
    )
}
export default ChatRoom;

function InputComp({value, OnChange}) {
    return(
        <View style={styles.mainStyle} >
            {/* <FontAwesome name="camera" size={hp("3%")} color={primary} /> */}
            <TextInput 
                value={value}
                onChangeText={OnChange}
                placeholder={"Type Here"}
                style={styles.InputStyle}
                multiline={true}
            />
            <Ionicons name="send" size={hp("3%")} color={black} />
        </View>
    )
}


const styles = StyleSheet.create({
    subHeader:{
        width:'100%',
        fontFamily:'Regular',
        fontSize:hp('2%'),
        textAlign:'center',
        paddingBottom:hp('1%'),
        color:primary
    },
    mainStyle:{
        width:"96%",
        minHeight:hp("6%"),
        maxHeight:hp("15%"),
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:hp("1.5%"),
        borderRadius:hp("2%"),
        borderColor:black,
        borderWidth:hp("0.2%"),
        marginBottom:hp("1.5%")
    },
    InputStyle:{
        width:"80%",
        alignItems:"center",
        paddingLeft:hp("1.2%"),
        fontSize:hp("2%"),
        fontFamily:'Regular',
        color:black,
    }
})