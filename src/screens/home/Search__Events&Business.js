import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet, 
    FlatList,
    ActivityIndicator
} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { primary, white } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import ImageCard from '../../components/home-events/ImageCard';
import { API } from '../../redux/MainURL';
import { ThemeContext } from '../../theme/ThemeContext';
var axios = require('axios');

var that;

export default class Search_Business extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            keywords:this.props.route.params.keyword,
            token:null,
            userID:"",
            type:this.props.route.params.type,
            SearchData:[],
            ImgPath:this.props.route.params.ImgPath,
            Failed:false,
            loading:false,
            offset:1,
            isListEnd:false,
            success:false,
            error:false,
        }
    }

    componentDidMount(){
        that= this;
        AsyncStorage.getItem('user',(err, data)=>{
            this.setState({token: JSON.parse(data).token, userID:JSON.parse(data).id}, () =>{
                this.GetData_BySearch()
            })
        })
    }

    onCardPress = (item) => {
        if(this.state.type == "business"){
            this.props.navigation.navigate('BusinessDetails', {businessDetails: item, imgPath: this.state.ImgPath})
        }
        else{
            this.props.navigation.navigate('EventDetails', {EventID: item.id, EventName:item.name, favorite:item.favorite })
        }
    }

    onLikePress = (item, index) => {
        if(this.state.type == "business"){
            var config;
            const business = this.state.SearchData;
            if(item.favorite){
                business[index].favorite = null;
                var data = new FormData();
                data.append('user_id', this.state.userID);
                data.append('business_id', item.id); 
                
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
                data.append('business_id', item.id);
        
                config = {
                    method: 'post', 
                    url:API+'jacobanderson_app/public/api/add-favorite-business',
                    data : data
                };
            }
            this.setState({SearchData:business})
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else{
            var config;
            const events = this.state.SearchData;
            if(item.favorite){
                events[index].favorite = null;
                var data = new FormData();
                data.append('user_id', this.state.userID);
                data.append('event_id', item.id);
    
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
                data.append('event_id', item.id);
        
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
    }

    GetData_BySearch = () => {
        if( !that.state.loading && !that.state.isListEnd){
            that.setState({loading: true})
            var config = {
            method: 'get',
            url: API+`jacobanderson_app/public/api/search?type=${that.state.type}&search=${that.state.keywords}`, 
                params: {page: that.state.offset },
            headers: { 
                'Authorization': 'Bearer '+that.state.token, 
            }
            };
            console.log("Check API ",config)
            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({ success: true, error:false })
                }
                else{
                    that.setState({error: true})
                }
                if(response.data.data.length > 0){
                    that.setState({
                        offset:that.state.offset+1,
                        SearchData: [...that.state.SearchData, ...response.data.data],
                        loading: false,
                        error:false,
                    })
                    console.log(JSON.stringify(response.data));
                }
                else{
                    that.setState({
                        isListEnd:true,
                        loading: false,
                        error:false,
                    })
                    console.log(JSON.stringify(response.data));
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({
                    isListEnd:true,
                    loading: false,
                    error:true,
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

    BusinessLoader = () => {
        const {colors} = this.context
            if(this.state.success && this.state.SearchData.length == 0){
                if(!this.state.loading){
                    return(
                        <View  style={[styles.main, {backgroundColor:colors.background}]} >
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:20,color:'gray'}}>  Not Found </Text>
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
                        data={this.state.SearchData}
                        keyExtractor={(item,index)=> index.toString()}
                        renderItem={({item,index}) =>
                                <ImageCard
                                    image={{uri: item.images? this.state.ImgPath+"/"+item.images.split(",")[0]:"abc"}}
                                    title={item.name}
                                    desc={item.description}
                                    loc={item.address1+" "+item.address2}
                                    onPress={()=> this.onCardPress(item)}
                                    isBusiness={true}
                                    isLike={item.favorite}
                                    onLikePress={()=> this.onLikePress(item, index)}
                                />
                            }
                        ListFooterComponent={this.renderFooter()}
                        onEndReached={this.GetData_BySearch}
                        onEndReachedThreshold={0.5}
                        onEndReachedThreshold={0.5}
                    />
               )
            }
    }

  


    render() {
        const {colors} = this.context
        return (
            <Container>
                <Header 
                    heading={this.state.keywords}
                    backIcon
                />
                {
                    !this.state.success && !this.state.error ?
                        <View style={[styles.main, {backgroundColor:colors.background}]} >
                            <ActivityIndicator size={"large"} color={primary} />
                        </View>
                        :
                        this.BusinessLoader()
                }
                
            </Container>
        )
    }
}

Search_Business.contextType = ThemeContext

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        backgroundColor:white,
        justifyContent:"center"
    },
    List_style:{
        width:"100%", 
        alignSelf:"center",
        padding:'5%',
    },
    viewspace:{
        marginBottom:hp("3%")
    }
});