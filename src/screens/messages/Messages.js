import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text,
    FlatList,
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
import { toTitleCase } from '../../utils';

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
        const {user} = this.props;
        var name = chat.data.toName
        var idUser = chat.data.toSqlID
        var Photo = chat.data.toPhoto
        if(chat.data.toID == user.firebase_id){
            name = chat.data.fromName;
            Photo = chat.data.fromPhoto;
            idUser = chat.data.fromSqlID;
            // Photo = this.props.user.Photo;
        }
        return(
            <MessageThread
                // onPress={this.onChatPress}
                id={user.firebase_id}
                img={Photo} 
                name={toTitleCase(name)}
                read={chat.data.read}
                readBy={chat.data.readBy}
                msg={chat.data.lastMessageText}
                lastMessageBy={chat.data.lastMessageBy}
                lastMessageTime ={chat.data.lastMessage}
                onPress={() => this.props.navigation.navigate(
                    "MessagesStack", {
                        screen: 
                        'ChatRoom', 
                        params:
                        {
                            person:{
                                id: idUser,
                                firebase_id: chat.id.split("_")[0] == user.firebase_id ? chat.id.split("_")[1] : chat.id.split("_")[0],
                                name: name,
                                image: Photo,
                            },
                        }
                    }
                    
                )}
            />
        )
    }
    // onChatPress = () => {
    //     this.navigation.navigate('MessagesStack',{screen:'ChatRoom'})
    // } 
    render(){
        const { chats } = this.state;
        if(this.state.loading == true){
            // return <Chats_Placeholder />
            return <ActivityIndicator size="large" color="black" style={{flex:1}} />
        }
        return(
            <Container>
                <Header
                    backIcon={this.props.user.type=="individual"&&true}
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
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{fontSize:18, color:'gray'}}>No Messages</Text>
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
