import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import { gray } from '../../assets/colors';
import Header from '../../components/common/Header';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import MessageThread from '../../components/messages/MessageThread';


const Messages = () => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    const onChatPress = () => {
        navigation.navigate('ChatRoom')
    } 
    return(
        <Container>
            <Header
                heading={"Messages"}
            />
            <MessageThread onPress={onChatPress}/>
            <MessageThread onPress={onChatPress}/>
            <MessageThread onPress={onChatPress}/>
            <MessageThread onPress={onChatPress}/>
            <MessageThread onPress={onChatPress}/>
        </Container>
    )
}
export default Messages;

const styles = StyleSheet.create({
    
})