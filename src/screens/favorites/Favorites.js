import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    Switch
} from 'react-native';
import {heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary, white } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';
import { API } from '../../redux/MainURL';
import { ThemeContext } from '../../theme/ThemeContext';
var axios = require('axios');
var that;

class Favorites extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            Bus_items:[],
            Failed:false,
            Loader:false,
            Check:true,
            userID:null
        }
        
    }

    componentDidMount(){
        that= this;
        AsyncStorage.getItem('user', (err, data)=>{
            this.setState({userID: JSON.parse(data).id}, ()=> {
                this.GetFavourite_Events()
                this.GetFavourite_Business()
            })
        })
    }

    GetFavourite_Events = () => {
        console.log("Event")
        that.setState({Loader: true})
        var config = {
            method: 'get',
            url: API+'jacobanderson_app/public/api/get-favorite/'+this.state.userID,
        };
        console.log("Check Get Event: ", config)
        axios(config)
        .then(function (response) {
            if(response.data.success){
                that.setState({
                    Loader:false, 
                    items:response.data.data
                }),
                console.log(response.data.data)
            }
            else(
                that.setState({
                    Loader:false,
                    Failed:true,
                })
            )
        })
        .catch(function (error) {
            console.log(error);
            that.setState({
                Loader:false,
                Failed:true,
            })
        });
    }

    GetFavourite_Business = () => {
        that.setState({Loader: true})
        var config = {
            method: 'get',
            url: API+'jacobanderson_app/public/api/get-favorite-business/'+this.state.userID,
        };

        axios(config)
        .then(function (response) {
            if(response.data.success){
                that.setState({
                    Loader:false, 
                    Bus_items:response.data.data
                })
                // console.log(JSON.stringify(response.data));
            }
            else{
                that.setState({
                    Loader:false,
                    Failed:true,
                })
            }
           
        })
        .catch(function (error) {
            console.log(error);
            that.setState({
                Loader:false,
                Failed:true,
            })
        });

    }

    PressSwitch = () => {
        this.setState({Check: !this.state.Check})
        if(!this.state.Check){
            this.GetFavourite_Events(this.state.userID)   
       }
       else{
            this.GetFavourite_Business(this.state.userID)
       }
    }

    OnPress_Favorite_Event = (id, name, favorite) => {
        this.props.navigation.navigate('EventDetails', {EventID: id, EventName:name, favorite})
    }

    OnPress_Favorite_Business = (businessDetails, favorite) => {
        // console.log(businessDetails)
        this.props.navigation.navigate('BusinessDetails', {businessDetails, favorite})
    }

    render() {
            const {colors} = this.context
        return (
            <Container>
                <SimpleHeader
                    // backIcon
                    heading={"Favorites"}
                />

               <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:hp("1%")}} >
                    <Text style={[styles.TxtHeading, {color:colors.text}]} > {this.state.Check?"Event":"Business"} </Text> 
                    <Switch
                        trackColor={{ false: "#767577", true: primary }}
                        thumbColor={this.state.Check ? white : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.PressSwitch}
                        value={this.state.Check}
                    />
                </View>
                
                    { 
                        this.state.Check?
                            this.state.Loader?
                                <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                                    <ActivityIndicator size="large" color={primary}  />
                                </View>                        
                                :
                                (
                                    this.state.Failed?
                                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                                        <Text style={styles.Txt} >No Favorites</Text>
                                    </View>                        
                                    :
                                    <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false} >
                                        {
                                            this.state.items.map(item=>
                                                item.event !== null &&
                                                <View key={item.id}>
                                                        <Row 
                                                            icon={'heart'}
                                                            text={item.event.description}
                                                            onPress={()=>this.OnPress_Favorite_Event(item.event.id, item.event.name, 1)}  
                                                        />
                                                </View>
                                            )
                                        }
                                    </ScrollView>
                                )
                        :
                            this.state.Loader?
                                <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                                    <ActivityIndicator size="large" color={primary}  />
                                </View>                        
                                :
                                (
                                    this.state.Failed?
                                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                                        <Text style={styles.Txt} >No Favorites</Text>
                                    </View>                        
                                    :
                                    <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false} >
                                        {
                                            this.state.Bus_items.map(item=>
                                                 <View key={item.id}>
                                                        {/* {console.log("checking..", item.business.name)} */}
                                                         <Row 
                                                             icon={'heart'}
                                                             text={item.business.name}
                                                            //  text={"businesss"}
                                                             onPress={()=>this.OnPress_Favorite_Business(item.business,  1)}  
                                                         />
                                                 </View>
                                             )
                                        }
                                    </ScrollView>
                                )    
                    }
            </Container>
        );
    }
}

function ChipComp({Onpress, name, ifCheck}) {
    return(
        <TouchableOpacity style={ifCheck?styles.Check_btn:styles.btn} onPress={Onpress} >
            <Text style={[styles.Txt, {color:ifCheck?white:primary}]} >{name}</Text>
        </TouchableOpacity>
    )
}

export default Favorites;
Favorites.contextType = ThemeContext

const styles = StyleSheet.create({
    Container:{
        flex:1,
        // width:"100%",
        // alignItems:"center",
        // justifyContent:"center",
        // backgroundColor:"red",
        // height:hp("40%"),
        marginTop:hp("2%")
    },  
    Txt:{
        fontSize:hp("2.5%"),
        fontFamily:"Bold",
        color:primary,
        alignSelf:"center"
    },
    TxtHeading:{
        fontSize:hp("3%"),
        fontFamily:"Bold",
        color:black,
    },
    btn:{
        // flex:1,
        width:"35%",
        height:hp("5%"),
        borderRadius:hp("1%"),
        backgroundColor:white,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        paddingHorizontal:hp("0.5%"),
        borderColor:primary,
        borderWidth:hp("0.2%")
    },
    Check_btn:{
        width:"35%",
        height:hp("5%"),
        borderRadius:hp("1%"),
        backgroundColor:primary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:hp("0.5%"),
        marginRight:hp("1%")
    },
})