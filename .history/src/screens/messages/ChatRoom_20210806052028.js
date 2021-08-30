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


const ChatRoom = () => {

    const { colors } = useTheme();
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Robin Davidson"}
            />
        </Container>
    )
}
export default ChatRoom;

const styles = StyleSheet.create({
    
})