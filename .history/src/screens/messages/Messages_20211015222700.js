import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import { gray } from '../../assets/colors';
import Header from '../../components/common/Header';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import MessageThread from '../../components/messages/MessageThread';
import { connect } from 'react-redux';
import firebase from '../../firebase'

class Messages extends React.Component {
    state = { 
        loading:true,
        onTop:true,
        chats:[],
    }
    componentDidMount(){
        // console.log(this.props.user)
        this.fetchThreads()
    }
    fetchThreads = () => {
        const uid = this.props.user.firebase_id;
        firebase.firestore
        .collection('chats')
        .where('fromID','==',uid)
        // .where('deletedBy','array-contains',uid)
        .orderBy('lastMessage',"desc")
        .onSnapshot((querySnapshot)=>{
            if(querySnapshot.docs.length == 0){
                this.setState({loading:false})
            }
            querySnapshot.docs.map((documentSnapshot)=>{
                const chats = this.state.chats.filter(chat=>chat.id!==documentSnapshot.id)
                this.setState({chats:[...chats,{id:documentSnapshot.id,data:documentSnapshot.data()}],loading:false},()=>{
                    // this.chatsHolder = this.state.chats;
                })
            })
        })
        firebase.firestore
        .collection('chats')
        .where('toID','==',uid)
        // .where('deletedBy','array-contains',id)
        .orderBy('lastMessage',"desc")
        .onSnapshot((querySnapshot)=>{
            if(querySnapshot.docs.length == 0){
                this.setState({loading:false})
            }
            querySnapshot.docs.map((documentSnapshot)=>{
                const chats = this.state.chats.filter(chat=>chat.id!==documentSnapshot.id)
                this.setState({chats:[...chats,{id:documentSnapshot.id,data:documentSnapshot.data()}],loading:false},()=>{
                    // this.chatsHolder = this.state.chats;
                })
            })
        })
        this.setState({loading: false});
    }
    renderChats(chat){
        var name = chat.data.toName
        var idUser = chat.data.toSqlID
        var Photo = chat.data.toPhoto
        if(chat.data.toID == this.props.user.ModifiedBy){
            name = chat.data.fromName;
            Photo = chat.data.fromPhoto;
            idUser = chat.data.fromSqlID;
            // Photo = this.props.user.Photo;
        }
        return(
            <MessageThread
                // onPress={this.onChatPress}
                id={this.props.user.idUser}
                img={{uri:Photo}} 
                name={this.renderName(name)}
                read={chat.data.read}
                readBy={chat.data.readBy}
                msg={chat.data.lastMessageText}
                lastMessageBy={chat.data.lastMessageBy}
                time={chat.data.lastMessage}
                onpress={() => this.props.navigation.navigate(
                    'Chatting',
                    {
                        person:{
                            idUser: idUser,
                            name: name,
                            image: Photo,
                        },
                        chatID: chat.id,
                    }
                )}
            />
        )
    }
    onChatPress = () => {
        this.navigation.navigate('MessagesStack',{screen:'ChatRoom'})
    } 
    render(){
        const { chats } = this.state;
        if(this.state.loading == true){
            // return <Chats_Placeholder />
            return <ActivityIndicator size="large" color="black" style={{flex:1}} />
        }
        return(
            <Container>
                <Header
                    backIcon={true}
                    heading={"Messages"}
                    icon1="settings-outline"
                    icon1Press={()=>this.navigation.navigate('OtherStack',{screen:'Settings'})}
                />
                {/* <MessageThread onPress={this.onChatPress}/> */}
                {chats.length > 0
                    ?
                    <FlatList
                        // inverted={Platform.OS == "android" ? false : true}
                        data={chats}
                        renderItem={({item,index})=>this.renderChats(item)}
                    />
                    :
                    <View style={{height:650,justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{fontSize:18, color:'gray'}}>No Chats</Text>
                    </View>
                }     
                <View style={{height:75}} />
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return{
        user: state.LoginReducer.User,
    }
}
export default connect(mapStateToProps, null)(Messages);
