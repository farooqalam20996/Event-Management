import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{Component} from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    RefreshControl,
} from 'react-native';
import { white } from '../../assets/colors';
import BusinessHomeInitial from '../../components/home-events/BusinessHomeInitial';
import ImageCard from '../../components/home-events/ImageCard';
import { API } from '../../redux/MainURL';
var axios = require('axios');

var that;

class EventsBy_User extends Component{

    constructor(props){
        super(props);
        this.state = {
            Search:"",
            Events_ByUser:[],
            loading:false,
            offset:1,
            isListEnd:false,
            success:false,
            error:false,
            ImgPath:"",
            UserID:null,
            refreshing:false
        }
    }

    onCardPress = (id, name) => {
        this.props.navigation.navigate('EventDetails', {EventID: id, EventName:name})
    }

    componentWillUnmount(){
        this.props.onRef(undefined)
    }

    componentDidMount(){
        this.props.onRef(this)
        that= this
            AsyncStorage.getItem("user", (err, data)=> {
                this.setState({UserID: JSON.parse(data).id},()=>{
                    this.GetAllEvents_ByUser()
                })
                console.log("UserId: ", this.state.UserID)
            })
    }

    GetAllEvents_ByUser = () => {
        if(!that.state.loading && !that.state.isListEnd){
            that.setState({loading: true})
            var config = {
                method: 'get',
                url: API+'jacobanderson_app/public/api/get-events-by-business/'+this.state.UserID,
                params:{page: that.state.offset}
            };
            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({success:true, error:false, ImgPath:response.data.image_path })
                }
                else{
                    that.setState({error: true})
                }
                if(response.data.data.length > 0){
                    that.setState({ 
                        success:true,
                        offset:that.state.offset+1,
                        Events_ByUser: [...that.state.Events_ByUser, ...response.data.data],
                        loading: false, 
                    })
                    
                }
                else{
                        that.setState({
                            isListEnd: true,
                            loading:false,
                            error:false
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({ 
                    loading: false, 
                    error:true
                })
            });
            }
        }

    renderFooter(){
        if(that.state.loading){
            return <ActivityIndicator style={{ padding: 20 }} size="large" color="#0063DE" />
        }
        else{
            return <View style={styles.viewspace} />
            
        }
    }

    Events_ByUser_Loader(){
        if(this.state.success && this.state.Events_ByUser.length == 0){
            if(!this.state.loading){
                return(
                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}} > 
                        <BusinessHomeInitial/>
                    </View>
                )
            }
        }
        else{
            return(
                <FlatList
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl enabled={true} refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
                    contentContainerStyle={styles.List_style}
                    style={{margin:'-6%', marginTop:"1%"}}
                    data={that.state.Events_ByUser}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item,index}) =>
                            <ImageCard
                                image={{uri: this.state.ImgPath+"/"+item.images.split(",")[0]}}
                                title={item.name}
                                desc={item.description}
                                loc={item.address1+" "+ item.address2}
                                date={item.date}
                                onPress={()=> this.onCardPress(item.id, item.name)}
                            />
                    }
                    ListFooterComponent={this.renderFooter()}
                    onEndReached={this.GetAllEvents_ByUser}
                    onEndReachedThreshold={0.5}
                />
            )
        }
    }

    onRefresh = () => {
        this.setState({refreshing: true})
        try{
            this.setState({
                Business:[],
                isListEnd:false,
                loading:false,
                success:false,
            },()=>{
                this.GetAllEvents_ByUser()
                this.setState({refreshing: false})
            })
        }catch(e){
            this.setState({refreshing: false})
            console.log(e)
        }
    }

    render() {
        return (
                <View style={{flex:1}}>
                    {
                        !this.state.success && !this.state.error ?
                            <ActivityIndicator style={{ flex:1 }} color="#0063DE" size="large" />
                            :
                            this.Events_ByUser_Loader()
                    }
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#FFFFFF",
    },
    viewspace:{
        marginBottom:'3%'
    },
    List_style:{
        width:"100%", 
        alignSelf:"center",
        padding:'5%',
    },
});

export default EventsBy_User;