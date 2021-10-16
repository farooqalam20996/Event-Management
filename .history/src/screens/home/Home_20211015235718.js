import React,{Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    RefreshControl
} from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import ImageCard from '../../components/home-events/ImageCard';
import { API } from '../../redux/MainURL';
import {connect} from "react-redux";
import { LoadCategories } from '../../redux/action/CategoriesAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalAppearance from '../../components/common/modal';
import { gray, primary, white } from '../../assets/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Filter from '../../components/common/Filter';
import { Button } from '../../components/common/Button';
import Toast from 'react-native-easy-toast';
import Filters from '../../components/home-events/Filter';
import {registerForPushNotificationsAsync, SendNotification} from "../../Notifications/index";

var axios = require('axios');
var FormData = require('form-data');
var that;

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            Search:"",
            Business:[],
            loading:false,
            offset:1,
            isListEnd:false,
            success:false,
            error:false,
            userID:"",
            ImgPath:"",
            Refresh:false,
            Show_Modal:false,
            today:false,
            weekly:false,
            top:false,
            UpComing:false,
            token:null,
        }
    }

    onCardPress = (businessDetails) => {
        this.props.navigation.navigate('BusinessDetails',{
            businessDetails,
            imgPath: this.state.ImgPath
        })
    }

    componentDidMount(){
        that= this
        this.props._Categories()
        AsyncStorage.getItem('user',(err, data)=>{
            this.setState({token: JSON.parse(data).token, userID:JSON.parse(data).id}, () =>{
                this.BusinessFeeds()
            })
        })
        // registerForPushNotificationsAsync()
    }

    onLikePress = (details, index) => {
        var config;
        const business = this.state.Business;
        if(details.favorite){
            business[index].favorite = null;
            var data = new FormData();
            data.append('user_id', this.state.userID);
            data.append('business_id', details.id); 

            config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/remove-favorite-business',
                data : data
            };
        }
        else{
            business[index].favorite = business[index].id;
            var data = new FormData();
            data.append('user_id', this.state.userID);
            data.append('business_id', details.id);
    
            config = {
                method: 'post', 
                url:API+'jacobanderson_app/public/api/add-favorite-business',
                data : data
            };
        }
            this.setState({Business:business})
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  
    BusinessFeeds(){
        if(!that.state.loading && !that.state.isListEnd){
            that.setState({ loading: true })

            var config = {
            method: 'get',
            url: API+'jacobanderson_app/public/api/get-business', params:{page: that.state.offset},
            headers:{
                    Authorization: "Bearer "+that.state.token
                }
            };

            axios(config)
            .then(function (response) {
                if(response.data.success){
                        that.setState({ success: true, error:false,ImgPath:response.data.image_path  })
                }
                else{
                    that.setState({error: true})
                }   
                if(response.data.data.length > 0){
                    that.setState({
                        offset:that.state.offset+1,
                        Business:[...that.state.Business,...response.data.data],
                        loading:false,
                        error:false,
                    })
                }
                else{
                    that.setState({
                        isListEnd: true,
                        loading: false,
                        error:false
                    })
                }
            })
            .catch(function (error) {
                that.setState({
                    isListEnd: true,
                    loading: false,
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

    BusinessLoader(){
        if(this.state.success && this.state.Business.length == 0){
            if(!this.state.loading){
                return(
                    <View style={styles.main} >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'gray'}}>No Business</Text>
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
                    data={that.state.Business}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item,index}) =>
                            <ImageCard
                                image={{uri: item.images? this.state.ImgPath+"/"+item.images.split(",")[0]:"abc"}}
                                title={item.name}
                                desc={item.description}
                                loc={item.address1+" "+item.address2}
                                onPress={()=>this.onCardPress(item)}
                                isBusiness={true}
                                isLike={item.favorite}
                                onLikePress={()=> this.onLikePress(item, index)}
                            />
                        }
                ListFooterComponent={this.renderFooter()}
                onEndReached={this.BusinessFeeds}
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
                this.BusinessFeeds()
                this.setState({Refresh: false})
            })
        }catch(e){
            console.log(e)
            this.setState({Refresh: false}) 
        }
        
    }

    OnSearchPress = (item) => {
        this.props.navigation.navigate("Search_Business", {keyword:item, type:"business", ImgPath: this.state.ImgPath})
        this.setState({Search:""})
    }

 
    render() {
        return (
            <>
                <Container>
                    <Header
                        search
                        inputValue={this.state.Search}
                        onChange={(text)=>this.setState({Search:text})}
                        onSearch={()=> this.OnSearchPress(this.state.Search)}
                        icon1="chatbox-outline"
                        icon1Press={()=>this.props.navigation.navigate('Messages')}
                        icon2="funnel-outline"
                        icon2Press={()=> this.setState({Show_Modal: true})}
                        icon3="settings-outline"
                        icon3Press={()=>this.props.navigation.navigate('OtherStack',{screen:'Settings'})}
                    />
                    <Filters filters={this.props.Categories} navigation={this.props.navigation} />

                    {
                        !this.state.success && !this.state.error ?
                            <ActivityIndicator style={{ flex:1 }} color="#0063DE" size="large" />
                            :
                            this.BusinessLoader()
                    }
                    <ModalAppearance OpenModal={this.state.Show_Modal} CloseModal={()=> this.setState({Show_Modal:false})}>
                        <View style={{height:5, width:"25%", backgroundColor:gray, alignSelf:"center", marginTop:hp("2%")}} />
                        <Filter
                        
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

function mapStateToProps(state) {
    return{
        Categories:state.Categories_reducer.Categories
    }
}

function mapDispatchToProps(dispatch) {
    return{
        _Categories: () => dispatch(LoadCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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