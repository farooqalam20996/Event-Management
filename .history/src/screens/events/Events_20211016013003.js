import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{Component, useState} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    RefreshControl
} from 'react-native';
import Toast from 'react-native-easy-toast';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { gray, primary, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import Filter from '../../components/common/Filter';
import Header from '../../components/common/Header';
import ModalAppearance from '../../components/common/modal';
import ImageCard from '../../components/home-events/ImageCard';
import { API } from '../../redux/MainURL';
var axios = require('axios');
var FormData = require('form-data');


var that;
class Events extends Component{

    constructor(props){
        super(props);
        this.state = {
            Search:"",
            Events:[],
            loading:false,
            offset:1,
            isListEnd:false,
            success:false,
            error:false,
            ImgPath:"",
            Refresh:false,
            UserId:null,
            Show_Modal:false,
            today:false,
            weekly:false,
            top:false,
            UpComing:false,
            token:null,
        }
    }

    onCardPress = (id, name, favorite) => {
        this.props.navigation.navigate('EventDetails', {
            EventID: id,
            EventName:name,
            favorite,
            imgPath:this.state.ImgPath
        })
    }

    onLikePress = (event, index) => {
        var config;
        const events = this.state.Events;
        if(event.favorite){
            events[index].favorite = null;
            var data = new FormData();
            data.append('user_id', this.state.UserId);
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
            data.append('user_id', this.state.UserId);
            data.append('event_id', event.id);
    
            config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/add-favorite-event',
                data : data
            };
           

        }
            this.setState({Events:events})
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
 
    componentDidMount(){
        AsyncStorage.getItem('user', (err,data)=>{
            this.setState({UserId: JSON.parse(data).id, token: JSON.parse(data).token}, () => {
                this.GetAllEvents()
            })
        })
        that= this
    }

    GetAllEvents = () => {
        if(!that.state.loading && !that.state.isListEnd){
            that.setState({loading: true})
            var config = {
                method: 'get',
                url:API+'jacobanderson_app/public/api/get-events', params:{ page: that.state.offset },
                headers:{
                    Authorization: "Bearer "+that.state.token
                }
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
                            offset:that.state.offset+1,
                            Events: [ ...that.state.Events, ...response.data.data], 
                            loading:false,
                            error:false,
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

    renderFooter(){
        if(that.state.loading){
            return <ActivityIndicator style={{ padding: 20 }} size="large" color="#0063DE" />
        }
        else{
            return <View style={styles.viewspace} />
            
        }
    }

    EventsLoader(){
        if(this.state.success && this.state.Events.length == 0){
            if(!this.state.loading){
                return(
                    <View style={styles.main} >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'gray'}}>No Events</Text>
                        </View>
                    </View>
                )
            }
        }
        else{
            return(
                <FlatList
                    refreshControl={<RefreshControl refreshing={this.state.Refresh} onRefresh={this.onRefresh} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.List_style}
                    style={{margin:'-6%', marginTop:"1%"}}
                    data={that.state.Events}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item,index}) =>
                            <ImageCard
                                image={{uri: item.images? this.state.ImgPath+"/"+item.images.split(",")[0]:"abc"}}
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
                    onEndReached={this.GetAllEvents}
                    onEndReachedThreshold={0.5}
                />
            )
        }
    }

    onRefresh = () => {
        this.setState({Refresh: true})
        try{
            this.setState({
                Business:[],
                isListEnd:false,
                offset:1,
                loading:false,
                success:false
            },()=>{
                this.GetAllEvents()
                this.setState({Refresh: false})
            })
        }catch(e){
            console.log(e)
            this.setState({Refresh: false})
        }
        
    }

    OnSearchPress = (item) => {
        this.props.navigation.navigate("Search_Business", {keyword:item, type:"event", ImgPath: this.state.ImgPath})
        this.setState({Search:""})
    }

    render() {
        return (
                <>
                    <Container>
                        <Header
                            search
                            inputValue={this.state.Search}
                            onChange={(text)=>this.setState({Search: text})}
                            onSearch={()=> this.OnSearchPress(this.state.Search)}
                            icon1="heart-outline"
                            icon1Press={()=>this.props.navigation.navigate('OtherStack',{screen:'Favorites'})}
                            icon2="funnel-outline"
                            // icon2Press={()=>this.props.navigation.navigate('OtherStack',{screen:'Filter'})}
                            icon2Press={()=> this.setState({Show_Modal: true})}
                            icon3="settings-outline"
                            icon3Press={()=>this.props.navigation.navigate('OtherStack',{screen:'Settings'})}
                        />
                        {/* <Filter filters={filters} /> */}

                        {
                            !this.state.success && !this.state.error ?
                                <ActivityIndicator style={{ flex:1 }} color="#0063DE" size="large" />
                                :
                                this.EventsLoader()
                        }
                        <ModalAppearance OpenModal={this.state.Show_Modal} CloseModal={()=> this.setState({Show_Modal:false})}>
                            <View style={{height:5, width:"25%", backgroundColor:gray, alignSelf:"center", marginTop:hp("2%")}} />
                            <Filter
                                isEvent={true}
                                check_Today={()=> this.setState({today: !this.state.today})}
                                check_Top={()=> this.setState({top: !this.state.top})}
                                check_UpComing={()=> this.setState({UpComing: !this.state.UpComing})}
                                check_week={()=> this.setState({weekly: !this.state.weekly})}
                            />
                            <Button 
                                text={"Search"}
                                textColor={white}
                                style={{height:hp("5%"), backgroundColor:primary, alignSelf:"center"}}
                                onPress={()=> this.setState({Show_Modal:false})}
                            />
                        </ModalAppearance>
                        <Toast
                            ref={(toast) => this.toast = toast}
                            style={{backgroundColor:"black", width:"96%", zIndex:1}}
                            position="bottom"
                            positionValue={hp("10%")}
                            fadeInDuration={750}
                            fadeOutDuration={1000}
                            opacity={0.8}
                            textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                        />
                    </Container>
                </>
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

export default Events;