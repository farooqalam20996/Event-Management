import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    FlatList
} from 'react-native';
import Toast from 'react-native-easy-toast';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import ImageCard from '../../components/home-events/ImageCard';
import { API } from '../../redux/MainURL';
var axios = require('axios');
var FormData = require('form-data');

var that;

class EventsBy_Category extends Component{

    constructor(props){
        super(props);
        this.state = {
            Search:"",
            Events_ByCategory:[],
            loading:false,
            offset:1,
            isListEnd:false,
            success:false,
            error:false,
            Category_id:this.props.route.params.id,
            Category_Name:this.props.route.params.name,
            ImgPath:"",
            userID:null
        }
    }

    onCardPress = (id, name, favorite) => {
        this.props.navigation.navigate('EventsStack',{screen:'EventDetails', params: {EventID: id, EventName:name, favorite}})
    }

    componentDidMount(){
        AsyncStorage.getItem('user', (err, data)=>
            this.setState({userID: JSON.parse(data).id})
        )
        that= this
        this.GetAllEvents_ByCategory()
    }

    GetAllEvents_ByCategory = () => {
        if(!that.state.loading && !that.state.isListEnd){
            that.setState({loading: true})

            var axios = require('axios');

            var config = {
              method: 'get',
              url: API+'jacobanderson_app/public/api/get-events-by-category/'+this.state.Category_id,
              params:{page:this.state.offset}
            };
            
            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({success:true, error:false })
                }
                else{
                    that.setState({error: true})
                }
                if(response.data.data.length > 0){
                    that.setState({
                            offset:that.state.offset+1,
                            Events_ByCategory: [ ...that.state.Events_ByCategory, ...response.data.data], 
                            loading:false,
                            error:false,
                            ImgPath:response.data.image_path
                        })
                        // console.log(JSON.stringify(response.data))
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
                    that.setState({
                        isListEnd: true,
                        loading:false,
                        error:true
                    })
                console.log(error);
                });
            }
        }

    onLikePress = (event, index) => {
        var config;
        const events = this.state.Events_ByCategory;
        if(event.favorite){
            events[index].favorite = null;
            var data = new FormData();
            data.append('user_id', this.state.userID);
            data.append('event_id', event.id);

            config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/remove-favorite-event',
                data : data
            };
        }
        else{
            events[index].favorite = events[index].id;
            var data = new FormData();
            data.append('user_id', this.state.userID);
            data.append('event_id',  event.id);
    
            config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/add-favorite-event',
                data : data
            };
            

        }
            this.setState({Events:events})
            console.log("Check LIke API: ", config)
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

    renderFooter(){
        if(that.state.loading){
            return <ActivityIndicator style={{ padding: 20 }} size="large" color="#0063DE" />
        }
        else{
            return <View style={styles.viewspace} />
            
        }
    }

    Events_ByCategory_Loader(){
        if(this.state.success && this.state.Events_ByCategory.length == 0){
            if(!this.state.loading){
                return(
                    <View style={styles.main} >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:"transparent"}}>
                            <Text style={{fontSize:20,color:'gray', textAlign:"center"}}>No Events of {this.state.Category_Name}</Text>
                        </View>
                    </View>
                )
            }
        }
        else{
            return(
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.List_style}
                    style={{margin:'-6%', marginTop:"1%"}}
                    data={that.state.Events_ByCategory}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item,index}) =>
                            <ImageCard
                                image={{uri: item.images? this.state.ImgPath+"/"+item.images.split(",")[0]:"xyz"}}
                                title={item.name}
                                desc={item.description}
                                loc={item.address1+" "+ item.address2}
                                date={item.date}
                                onPress={()=> this.onCardPress(item.id, item.name, item.favorite)}
                                isLike={item.favorite}
                                onLikePress={()=> this.onLikePress(item, index)}
                            />
                    }
                    ListFooterComponent={this.renderFooter()}
                    onEndReached={this.GetAllEvents_ByCategory}
                    onEndReachedThreshold={0.5}
                />
            )
        }
    }

    render() {
        return (
                <>
                    <Container>
                        <Header
                            backIcon
                            heading={this.state.Category_Name}
                        />
                        {
                            !this.state.success && !this.state.error ?
                                <ActivityIndicator style={{flex:1 }} color="#0063DE" size="large" />
                                :
                                this.Events_ByCategory_Loader()
                        }
                        {/* <Toast
                            ref={(toast) => this.toast = toast}
                            style={{backgroundColor:"black", width:"96%", zIndex:1}}
                            position="bottom"
                            positionValue={hp("5%")}
                            fadeInDuration={750}
                            fadeOutDuration={1000}
                            opacity={0.8}
                            textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                        /> */}
                    </Container>
                </>
        );
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        // backgroundColor:"#FFFFFF",
        backgroundColor:"transparent"
    },
    viewspace:{
        marginBottom:'3%'
    },
    List_style:{
        width:"100%", 
        // backgroundColor:"", 
        alignSelf:"center",
        padding:'5%',
    },
});

export default EventsBy_Category;