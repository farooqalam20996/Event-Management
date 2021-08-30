import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import { gray } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';
import MessageCard from '../../components/messages/MessageCard';
import { useNavigation } from '@react-navigation/native';


const Messages = () => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    const onChatPress = () => {
        navigation.navigate('ChatRoom')
    } 
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Messages"}
            />
            <View style={{marginTop:hp('3%')}}/>
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>
        </Container>
    )
}
export default Messages;

const styles = StyleSheet.create({
    
})