import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import { gray, primary } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';
import MessageCard from '../../components/messages/MessageCard';

const data = {
    image: '',
    text: "hello john",
    createdAt: 1628269383,
}

const ChatRoom = () => {

    const { colors } = useTheme();
    return(
        <Container>
            <Header
                backIcon
                heading={"Robin Davidson"}
            />
            <Text style={[styles.subHeader]}>Rave Party</Text>
            <MessageCard side={"left"} data={data}/>
            <MessageCard side={"right"} data={data}/>
            <MessageCard side={"left"} data={data}/>
            <MessageCard side={"left"} data={data}/>
        </Container>
    )
}
export default ChatRoom;

const styles = StyleSheet.create({
    subHeader:{
        // borderBottomWidth:1,
        // borderColor: gray,
        width:'100%',
        fontFamily:'Regular',
        fontSize:hp('2%'),
        textAlign:'center',
        paddingBottom:hp('1%'),
        color:primary
    }
})