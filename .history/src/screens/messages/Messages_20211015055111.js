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


class Messages extends React.Component {

    onChatPress = () => {
        navigation.navigate('MessagesStack',{screen:'ChatRoom'})
    } 
    render(){
        return(
            <Container>
                <Header
                    backIcon={true}
                    heading={"Messages"}
                    icon1="settings-outline"
                    icon1Press={()=>this.navigation.navigate('OtherStack',{screen:'Settings'})}
                />
                <MessageThread onPress={this.onChatPress}/>
                <MessageThread onPress={this.onChatPress}/>
                <MessageThread onPress={this.onChatPress}/>
                <MessageThread onPress={this.onChatPress}/>
                <MessageThread onPress={this.onChatPress}/>
            </Container>
        )
    }
}
export default Messages;
