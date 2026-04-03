import React, {Component, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button } from '../../../components/common/Button';
import IconInput from '../../../components/common/IconInput';
import { gray, primary, purple, white } from '../../../assets/colors';
import {connect} from "react-redux";
import { AddImg, AddressLine1, AddressLine2, Business_SignUp, Category, Confirm_Password, Descrition, Email, Name, Password, PhoneNumber } from '../../../redux/action/Bus_SignUpAction';
import Toast from 'react-native-easy-toast';
import { LoadCategories } from '../../../redux/action/CategoriesAction';
import ImagePickerExample from '../../common/ImagePicker_Comp';

const constStyle = {
    width:'80%',
    height:hp('6%'),
    backgroundColor:'white',
    borderRadius:hp('1%'),
    marginTop:hp('2.5%')
}

class BusinessSignup extends Component{

    constructor(props){
        super(props);
        this.state={
            Select_Image1:null,
            Select_Image2:null,
            Select_Image3:null,
            Select_Image4:null,
        }
    }
    componentDidMount(){
        // this.props._LoadCategories(this.toast)
        // this.props._LoadCategories()
        console.log(this.props._Categories)
    }

    onSignUp_Press = () => {
        Keyboard.dismiss()
        if(
            this.props.Name == "" ||
            this.props.Email == "" || 
            this.props.Password == "" || 
            this.props.Conf_Password == ""||
            // this.props.Category == ""||
            this.props.Description == ""||
            this.props.PhoneNumber == ""||
            this.props.Address1 == ""||
            this.props.Address2 == ""
        )
        {
            this.toast.show("Please fill all field", 2500)
        }
        else if( this.props.Category == ""){
            this.toast.show("Kindly, Select Category", 2500)
        }
        else if(this.props.Password !== this.props.Conf_Password){
            this.toast.show("Password are not same", 2500)
        }
        else if(this.props.AddImg == ""){
            this.toast.show("Kindly, Add Image ", 2500)
        }
        else{
            this.props._User_SignUp(
                this.props.Name,
                this.props.Email,
                this.props.Password,
                this.props.Conf_Password,
                this.props.Category,
                this.props.Description,
                this.props.PhoneNumber,
                this.props.Address1,
                this.props.Address2, 
                this.props.AddImg,
                this.toast
            )
            console.log(
                this.props.AddImg,
            )
        }
    }

    componentDidUpdate(){
        console.log(this.props.AddImg)
    }

    OnImagePick = (pickImg) => {
        this.props._Addimg(pickImg,this.props.AddImg )
    } 

    render() {
        return (
            <>
                <IconInput
                    icon={"business"}
                    placeholder="Your Business name"
                    value={this.props.Name}
                    onChange={(text)=>this.props._Name(text)}
                    iconColor={gray}
                    onSubmitPress={()=>this.inputRef.focus()}
                    blur={false}    
                />
                <IconInput
                    icon={"mail"}
                    placeholder="Email"
                    value={this.props.Email}
                    onChange={(text)=>this.props._Email(text)}
                    iconColor={gray}
                    inputRef={ref => { this.inputRef = ref; }}
                    onSubmitPress={()=>this.inputRef1.focus()}
                    blur={false}
                    keyboard={"email-address"}
                />
                <IconInput
                    placeholder="Password"
                    value={this.props.Password}
                    onChange={(text)=>this.props._Password(text)}
                    iconColor={gray}
                    inputRef={ref => { this.inputRef1 = ref; }}
                    onSubmitPress={()=>this.inputRef2.focus()}
                    blur={false}
                    pass={true}
                />
                <IconInput
                    placeholder="Confirm Password"
                    value={this.props.Conf_Password}
                    onChange={(text)=>this.props._Confirm_Password(text)}
                    iconColor={gray}
                    inputRef={ref => { this.inputRef2 = ref; }}
                    onSubmitPress={()=>this.inputRef3.focus()}
                    blur={false}
                    pass={true}
                />
                <View style={constStyle}>
                    <Picker
                        style={{width:'100%',height:hp('6%')}}
                        selectedValue={this.props.Category}
                        onValueChange={(itemValue, itemIndex) =>
                            // setSelectedLanguage(itemValue)
                            this.props._Category(itemValue)
                        }
                    >
                        {
                            this.props._Categories.map(e => 
                                <Picker.Item key={e.id} label={e.category_name} value={e.id} />
                            )
                        }
                    </Picker>
                </View>
                <TextInput
                    style={[constStyle, styles.desc]}
                    value={this.props.Description}
                    multiline
                    ref={ref => { this.inputRef3 = ref; }}
                    // onSubmitEditing={()=>this.inputRef4.focus()}
                    onChangeText={(text)=>this.props._Descrition(text)}
                    placeholder="Enter Description"
                />
                <IconInput
                    phone
                    placeholder="Phone Number"
                    value={this.props.PhoneNumber}
                    onChange={(text)=>this.props._PhoneNumber(text)}
                    iconColor={gray}
                    // inputRef={ref => { this.inputRef4 = ref; }}
                    onSubmitPress={()=>this.inputRef4.focus()}
                    blur={false}
                />
                <IconInput
                    placeholder="Address Line 1"
                    value={this.props.Address1}
                    onChange={(text)=>this.props._AddressLine1(text)}
                    iconColor={gray}
                    inputRef={ref => { this.inputRef4 = ref; }}
                    onSubmitPress={()=>this.inputRef5.focus()}
                    blur={false}
                />
                <View style={styles.row}>
                    <IconInput
                        style={{flex:5}}
                        placeholder="Address Line 2"
                        value={this.props.Address2}
                        onChange={(text)=>this.props._AddressLine2(text)}
                        iconColor={gray}
                        inputRef={ref => {this.inputRef5 = ref; }}
                        onSubmitPress={this.onSignUp_Press}
                        blur={false}
                    />
                    <TouchableOpacity style={[constStyle, styles.btn]}>
                        <Ionicons size={30} color={primary} name="location-sharp"/>
                    </TouchableOpacity>
                </View>

                <View style={[styles.row, {marginTop:hp("2%"), justifyContent:"space-between"}]} >
                    <ImagePickerExample OnImagePick={this.OnImagePick} imagesArr={this.props.AddImg} style={{backgroundColor:purple}} selectImg={this.props.AddImg[0] ? this.props.AddImg[0]: null}  />
                    <ImagePickerExample OnImagePick={this.OnImagePick} imagesArr={this.props.AddImg} style={{backgroundColor:purple}} selectImg={this.props.AddImg[1] ? this.props.AddImg[1]: null} />
                    <ImagePickerExample OnImagePick={this.OnImagePick} imagesArr={this.props.AddImg} style={{backgroundColor:purple}} selectImg={this.props.AddImg[2] ? this.props.AddImg[2]: null} />
                    <ImagePickerExample OnImagePick={this.OnImagePick} imagesArr={this.props.AddImg} style={{backgroundColor:purple}} selectImg={this.props.AddImg[3] ? this.props.AddImg[3]: null} />
                </View>
              
                <Button
                    text="SIGN UP"
                    color={purple}
                    style={{marginBottom:hp('5%')}}
                    textColor={white}
                    onPress={this.onSignUp_Press}
                    Loading={this.props.Loader}
                    disabled={this.props.Loader&&true} 
                /> 

                <View style={{height:hp("5%")}} />

                {/* <View style={{position: "absolute", bottom:0, alignSelf:"center", width:"100%", height:hp("7%")}} > */}
                    <Toast
                        ref={(toast) => this.toast = toast}
                        style={{backgroundColor:"black", width:"96%"}}
                        position="bottom"
                        positionValue={hp("-43%")}
                        fadeInDuration={750}
                        fadeOutDuration={800}
                        opacity={0.8}
                        textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                    />
                {/* </View> */}
                
            </>
        );
          
    }
}

function mapStateToProps(state) {
    return{
        Failed: state.Bus_SignUpReducer.Failed,
        Loader: state.Bus_SignUpReducer.Loader,
        Success: state.Bus_SignUpReducer.Success,
        Name: state.Bus_SignUpReducer.Name,
        Email: state.Bus_SignUpReducer.Email,
        Password: state.Bus_SignUpReducer.Password,
        Conf_Password: state.Bus_SignUpReducer.Conf_Password,
        Category: state.Bus_SignUpReducer.Category,
        Description: state.Bus_SignUpReducer.Description,
        PhoneNumber: state.Bus_SignUpReducer.PhoneNumber,
        Address1: state.Bus_SignUpReducer.Address1,
        Address2: state.Bus_SignUpReducer.Address2,
        AddImg: state.Bus_SignUpReducer.AddImg,
        // load categories
        Cat_failed: state.Categories_reducer.failed,
        Cat_success: state.Categories_reducer.success,
        Cat_loader: state.Categories_reducer.loader,
        _Categories: state.Categories_reducer.Categories,


    }
}

function mapDispatchToProps(dispatch) {
    return{
        _Name:(text)=> dispatch(Name(text)),
        _Email:(text)=> dispatch(Email(text)),
        _Password:(text)=> dispatch(Password(text)),
        _Confirm_Password:(text)=> dispatch(Confirm_Password(text)),
        _Category:(text)=> dispatch(Category(text)),
        _Descrition:(text)=> dispatch(Descrition(text)),
        _PhoneNumber:(text)=> dispatch(PhoneNumber(text)),
        _AddressLine1:(text)=> dispatch(AddressLine1(text)),
        _AddressLine2:(text)=> dispatch(AddressLine2(text)),
        _Addimg:(text, imagesArr)=>dispatch(AddImg(text, imagesArr)),
        _User_SignUp:(Name, Email, Password, Conf_Password, Category, Description, PhoneNumber, Address1, Address2, AddImg, toast)=> dispatch(Business_SignUp(Name, Email, Password, Conf_Password, Category, Description, PhoneNumber, Address1, Address2, AddImg, toast)),
        _LoadCategories:() => dispatch(LoadCategories()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BusinessSignup);


const styles = StyleSheet.create({
    picker:{
       
    },
    desc:{
        height:hp('12%'),
        paddingHorizontal:hp('1%'),
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'80%'
    },
    btn:{
        backgroundColor:white,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:hp('6.5%'),
        marginLeft:hp('1%')
    }

})



// const BusinessSignup = ({onSignupPress}) => {

//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [cPassword, setCPassword] = useState("")
//     const [desc, setDesc] = useState("")
//     const [PhoneNumber, setPhoneNumber] = useState("")
//     const [Add1, setAdd1] = useState("")
//     const [Add2, setAdd2] = useState("")
//     const [selectedLanguage, setSelectedLanguage] = useState();


//     const onSignUp_Press = () => {
//         alert("polo")
//     }

// }