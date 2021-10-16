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
import { render } from 'react-dom';


class ChatRoom extends React.Component {
    state = { 
        // Name:"Erica Richter",
        input:"",
        demo:false,
        date:"",
        mode:'date',
        show:false,
        keyboardActive:false,
        msgs:[],
        person:this.props.route.params.person,
        chatID: this.props.route.params.chatID,
        IsVisible:false,
        Save_Service:[],
        Search:"",
        Select_Category:"",
        time:"",
        IsModalVisible:false,
        image:'',
        imgModal:false,
        userType:false,
        finalDate:'',
    } 
 
    render(){
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
                        {/* <MessageCard side={"left"} data={data1}/> */}
                    </ScrollView>
                </View>
                <View style={styles.mainStyle} >
                    <TextInput 
                        value={this.state.input}
                        onChangeText={(input)=> this.setState({input})}
                        placeholder={"Enter your message"}
                        style={styles.InputStyle}
                        multiline={true}
                    />
                    <Ionicons name="send" size={hp("3%")} color={black} />
                </View>
            </Container>
        )
    }
}
export default ChatRoom;

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