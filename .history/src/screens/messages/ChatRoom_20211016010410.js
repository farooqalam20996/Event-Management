import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import { black, gray, primary } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';
import MessageCard from '../../components/messages/MessageCard';
import SimpleHeader from '../../components/common/SimpleHeader';
import {Ionicons, FontAwesome} from "@expo/vector-icons";
import { connect } from 'react-redux';
import firebase from '../../firebase';

class ChatRoom extends React.Component {
    state = { 
        input:"",
        msgs:[],
        person:this.props.route.params.person,
        chatID: this.props.route.params.chatID,
        imgModal:false,
    } 
    componentDidMount=()=>{
        that= this;
        this.fetchMessages()
    }
    componentWillUnmount(){
        const {firebase_id} = this.props.user;
        const {chatID} = this.state;
        firebase.firestore
        .collection('chats')
        .doc(chatID)
        .get()
        .then((chat)=>{
            const data = chat.data()
            if(!data.readBy.includes(firebase_id)){
                firebase.firestore.collection('chats')
                .doc(chatID)
                .set(
                    {
                        readBy: [...data.readBy,firebase_id],
                    },
                    {
                        merge:true
                    }
                ).then((res)=>console.log(res)).catch((err)=>console.log(err))
            }    
        })
    }
    fetchMessages = () => {
        //to get chat messages
        const {firebase_id} = this.props.user;
        const {chatID} = this.state;

       firebase.firestore.collection('chats')
       .doc(chatID)
       .collection('messages')
       .orderBy("createdAt","desc")
       .onSnapshot((snapshot)=>{
           const messages = snapshot.docs.map(doc=>{
               const data = {
                   id:doc.id,
                   data:doc.data(),
               }
               return data;
           });
           this.setState({msgs:messages})
       })


       firebase.firestore
        .collection('chats')
        .doc(chatID)
        .onSnapshot((snapshot)=>{
            const data = snapshot.data()
            if(data.lastMessageBy !== firebase_id){
                firebase.firestore.collection('chats')
                .doc(chatID)
                .set(
                    {
                        read:true
                    },
                    {
                        merge:true
                    }
                ).then((res)=>console.log(res)).catch((err)=>console.log(err))
            }
        })
    }
    onSend = async () => {
        const {user, chatID, input } = this.state;
        const fromID = user.firebase_id;
        const toID = chatID.split('_')[0] == fromID ? chatID.split('_')[1] : fromID
        const obj = {
            text: input.trim(),
            createdAt: new Date().getTime(),
            fromID: fromID,
            seen:false,
            toID: toID,
        }
        firebase.firestore
        .collection('chats').
        doc(chatID)
        .collection('messages')
        .add(obj)
        .then(()=>this.setState({input:''})).catch((err)=>console.log(err))

        await firebase
        .firestore
        .collection('chats')
        .doc(chatID)
        .set(
            {
                lastMessage: new Date().getTime(),
                lastMessageBy: fromID,
                lastMessageText: input.trim(),
                read: false,
                readBy: [fromID],
            },
            {
                merge:true
            }
        ).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    render(){
        const {user} = this.props;
        const {person} = this.state;
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
                    <FlatList 
                        inverted
                        // style={{backgroundColor:'red'}}
                        data={this.state.msgs}
                        renderItem={({item})=>
                            <MessageCard
                                id={user.id}
                                name={person.name}
                                data={item.data}
                                side={item.data.fromID == user.firebase_id ? 'right':'left'}
                            />
                        }
                    />
                </View>
                <View style={styles.mainStyle} >
                    <TextInput 
                        value={this.state.input}
                        onChangeText={(input)=> this.setState({input})}
                        placeholder={"Enter your message"}
                        style={styles.InputStyle}
                        multiline={true}
                    />
                    <Ionicons onPress={this.onSend} name="send" size={hp("3%")} color={black} />
                </View>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return{
        user: state.LoginReducer.User,
    }
}

export default connect(mapStateToProps, null)(ChatRoom);

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