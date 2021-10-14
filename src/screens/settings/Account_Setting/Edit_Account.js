import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { gray, purple, white } from '../../../assets/colors/index';
import Toast from "react-native-easy-toast";
import { Container } from '../../../components/common/Container';
import SimpleHeader from '../../../components/common/SimpleHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../../../redux/MainURL';
import { connect } from 'react-redux';
var axios = require('axios');
var FormData = require('form-data');
var that;

class Edit_Account extends Component{

    constructor(props){
        super(props);
        this.state={
            check_pass: false,
            Name:"",
            Profile_Image:null,
            Failed:false,
            Loader:false,
            UserID:null,
            userName:""
        }
    }

    componentDidMount(){
        this.setState({userName:this.props.user.name})
        that= this;
        AsyncStorage.getItem('user', (err, data)=> {
            this.setState({UserID:JSON.parse(data).id})
        })
    }

    Edit_Account = () => {
        if(this.state.Name == "")
            {
                this.setState({Failed: true})
                this.toast.show("Please fill all field", 1000)
            }
        else{
            Keyboard.dismiss()
            that.setState({Loader: true})
            var data = new FormData();
            data.append('name', this.state.Name);

            var config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/edit-user/'+this.state.UserID,
                data : data
            };

            axios(config)
            .then(function (response) {
                if(response.data.success){
                    that.setState({Loader:false, Failed:false})
                    that.toast.show(response.data.message,1000)
                    that.setState({Name: ""})
                    console.log(JSON.stringify(response.data));
                }
                else{
                    that.setState({Loader:false, Failed:true})
                    that.toast.show(response.data.message,1000)
                    console.log(JSON.stringify(response.data));
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({Loader:false, Failed:true})
                that.toast.show("Somthing Went Wrong",1000)
            });
        }
    }

    render() {
        return (
            <Container>
                 <SimpleHeader
                    backIcon
                    heading={"Edit Account"}
                />
                <IconInput
                    icon="person"
                    placeholder={this.state.userName}
                    value={this.state.Name}
                    onChange={(text)=>this.setState({Name: text})}
                    iconColor={gray}
                    blur={false}
                    style={styles.InputStyle}
                />
                <Button
                    text="Submit"
                    color={purple}
                    textColor={white}
                    onPress={this.Edit_Account}
                    style={{marginBottom:hp('5%'), alignSelf:"center"}}
                    Loading={this.state.Loader}
                    disabled={this.state.Loader}
                />

               
                <Toast
                    ref={(toast) => this.toast = toast}
                    style={{backgroundColor:"black", width:"96%", zIndex:1}}
                    position="bottom"
                    positionValue={hp("-2%")}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                />
                <View style={{height:hp("15%")}} />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        user:state.LoginReducer.User
    }
}

export default connect(mapStateToProps, null)(Edit_Account);

const styles = StyleSheet.create({
    Txt:{
        color:"white",
        fontSize:hp("2.4%"),
        fontFamily:"Regular",
        marginTop:hp("2%")
    },
    InputStyle:{
        borderColor:"lightgray",
        borderWidth:2,
        width:"100%"
    },
    
})