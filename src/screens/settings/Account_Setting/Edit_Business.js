import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Platform,
    Image,
    Keyboard
 } from 'react-native';
import { gray, primary, purple, white } from '../../../assets/colors';
import { Container } from '../../../components/common/Container';
import IconInput from '../../../components/common/IconInput';
import SimpleHeader from '../../../components/common/SimpleHeader';
import {Picker} from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';
import { Button } from '../../../components/common/Button';
import * as ImagePicker from "expo-image-picker";
import ImagePickerExample from "../../../components/common/ImagePicker_Comp";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { LoadCategories } from '../../../redux/action/CategoriesAction';
import { API } from '../../../redux/MainURL';
import Spinner from 'react-native-loading-spinner-overlay';

var axios = require('axios');
var FormData = require('form-data');
var that;
const constStyle = {
    width:'80%',
    height:hp('6%'),
    backgroundColor:'white',
    borderRadius:hp('1%'),
    marginTop:hp('2.5%'),
    borderColor:"lightgray",
        borderWidth:2,
}

const ImgComp=({image, Onpress, style})=>{
    return(
        <TouchableOpacity style={[styles.Container, {...style}]} onPress={Onpress} >
            {!image && <Ionicons size={hp("3%")} color={"white"} name="add-circle" />}
            {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius:hp("0.8%") }} />}
        </TouchableOpacity>
    )
}

class Edit_Business extends Component{

    constructor(props){
        super(props);
        this.state = {
            Business_Name:"",
            Category:[],
            Description:"",
            PhoneNumber:"",
            Add1:"",
            Add2:"",
            AddImg:[],
            Img:null,
            Business_ID:null,
            Loader:false,
            Failed:false,
            Success:false,
            path: null
        }
    }

    componentDidMount(){
        that=this;
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();

        AsyncStorage.getItem("user", (err, data)=>{
            const business = JSON.parse(data)
            console.log(business)
            console.log("Business details: ", business.image_path+"/"+business.images.split(",")[0])
            this.setState({
                Business_ID:business.id,
                Business_Name:business.name,
                Description:business.description,
                PhoneNumber:business.phone,
                Add1:business.address1,
                Add2:business.address2,
                AddImg:business.images.split(",").map(item=> business.image_path+'/'+item),
                path: business.image_path
            })
        })
    }

    pickImage = (index) => async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if(!result.cancelled){
            var tempArr = this.state.AddImg;
            tempArr[index] = result.uri;
            this.setState({AddImg:tempArr})
        }
        console.log(result);
      };

    OnEdit_Business = () => {
        Keyboard.dismiss();
        that.setState({Loader: true})
        var data = new FormData();
        data.append('name', that.state.Business_Name);
        data.append('category', that.state.Category);
        data.append('description', that.state.Description);
        data.append('phone', that.state.PhoneNumber);
        data.append('address1', that.state.Add1);
        data.append('address2', that.state.Add2);
        this.state.AddImg.forEach((element, i )=> {
            const newFile = {
                name: "images.jpg",
                type: "images/jpeg",
                uri: Platform.OS === "android" ?element : element.replace("file://", "")
            }  
            data.append("images[]", newFile)
        })

        var config = {
        method: 'post',
        url: API+'jacobanderson_app/public/api/edit-business/'+that.state.Business_ID,
        data : data
        };
        console.log("Check API: ", config)
        axios(config)
        .then(function (response) {
            if(response.data.success){
                that.setState({
                    Loader:false,
                    Failed:false,
                    Success:true
                })
                that.toast.show(response.data.message, 1000)
                console.log(JSON.stringify(response.data));
            }
            else{
                that.setState({
                    Loader:false,
                    Failed:true,
                    Success:false
                })
                that.toast.show(response.data.message, 1000)
                console.log(JSON.stringify(response.data));
            }
        })
        .catch(function (error) {
            console.log(error);
            that.setState({
                Loader:false,
                Failed:true,
                Success:false
            })
            that.toast.show("Something Went Wrong", 1000)
        });
    }

    render() {
        console.log(this.state.AddImg)
        return (
             <Container>
                <SimpleHeader 
                    backIcon
                    heading={"Edit Business"}
                />
               <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:"flex-start"}} >
                    <IconInput
                        icon={"business"}
                        placeholder="Your Business name"
                        value={this.state.Business_Name}
                        onChange={(text)=>this.setState({Business_Name:text})}
                        iconColor={gray}
                        onSubmitPress={()=>this.inputRef.focus()}
                        blur={false}    
                        style={styles.InputStyle}
                    />
                    
                    <View style={constStyle}>
                        <Picker
                            style={{width:'100%',height:hp('6%')}}
                            selectedValue={this.state.Category}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({Category: itemValue})
                            }
                        >
                            {
                                this.props._Categories.map(e=>
                                    <Picker.Item key={e.id} label={e.category_name} value={e.id} />
                                )
                            }
                        </Picker>
                    </View>
                    <TextInput
                        style={[constStyle, styles.desc, styles.InputStyle]}
                        value={this.state.Description}
                        multiline
                        ref={ref => { this.inputRef = ref; }}
                        onChangeText={(text)=>this.setState({Description: text})}
                        placeholder="Enter Description"
                    />
                    <IconInput
                        phone
                        placeholder="Phone Number"
                        value={this.state.PhoneNumber}
                        onChange={(text)=>this.setState({PhoneNumber: text})}
                        iconColor={gray}
                        // inputRef={ref => { this.inputRef4 = ref; }}
                        onSubmitPress={()=>this.inputRef1.focus()}
                        blur={false}
                        style={styles.InputStyle}
                    />
                    <IconInput
                        placeholder="Address Line 1"
                        value={this.state.Add1}
                        onChange={(text)=>this.setState({Add1: text})}
                        iconColor={gray}
                        inputRef={ref => { this.inputRef1 = ref; }}
                        onSubmitPress={()=>this.inputRef2.focus()}
                        blur={false}
                        style={styles.InputStyle}
                    />
                    <View style={styles.row}>
                        <IconInput
                            style={{flex:5}}
                            placeholder="Address Line 2"
                            value={this.state.Add2}
                            onChange={(text)=>this.setState({Add2: text})}
                            iconColor={gray}
                            inputRef={ref => {this.inputRef2 = ref; }}
                            // onSubmitPress={this.OnEdit_Business}
                            // onSubmitPress={this.OnEdit_Business}
                            blur={false}
                            style={[styles.InputStyle, {width:"80%"}]}
                        />
                        <TouchableOpacity style={[constStyle, styles.btn]}>
                            <Ionicons size={30} color={primary} name="location-sharp"/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={[styles.row, {marginTop:hp("2%"),width:"100%", justifyContent:"space-between"}]}  >
                        {/* <ImgComp image={this.state.AddImg[0] ? this.state.AddImg[0]: null} Onpress={this.pickImage} />
                        <ImgComp image={this.state.AddImg[1] ? this.state.AddImg[1]: null} Onpress={this.pickImage} />
                        <ImgComp image={this.state.AddImg[2] ? this.state.AddImg[2]: null} Onpress={this.pickImage} />
                        <ImgComp image={this.state.AddImg[3] ? this.state.AddImg[3]: null} Onpress={this.pickImage} /> */}
                        
                        <ImgComp image={this.state.AddImg[0] ? this.state.AddImg[0] : null} Onpress={this.pickImage(0)} />
                        <ImgComp  image={this.state.AddImg[1] ? this.state.AddImg[1] : null} Onpress={this.pickImage(1)} />
                        <ImgComp  image={this.state.AddImg[2] ? this.state.AddImg[2] : null} Onpress={this.pickImage(2)} />
                        <ImgComp  image={this.state.AddImg[3] ? this.state.AddImg[3] : null} Onpress={this.pickImage(3)} />
                       
                        {/* <Image source={{uri: this.state.AddImg[0]}} style={{flex:1}} />
                        <Image source={{uri: this.state.AddImg[1]}} style={{flex:1}} />
                        <Image source={{uri: this.state.AddImg[2]}} style={{flex:1}} />
                        <Image source={{uri: this.state.AddImg[3]}} style={{flex:1}} /> */}
                        {/* <ImagePickerExample  selectImg={this.state.AddImg[0] ? this.state.AddImg[0]: null}  />
                        <ImagePickerExample  selectImg={this.state.AddImg[1] ? this.state.AddImg[1]: null} />
                        <ImagePickerExample  selectImg={this.state.AddImg[2] ? this.state.AddImg[2]: null} />
                        <ImagePickerExample  selectImg={this.state.AddImg[3] ? this.state.AddImg[3]: null} /> */}
                    </View>
                    <Button
                        text="EDIT BUSINESS"
                        color={purple}
                        style={{marginBottom:hp('5%'), alignSelf:"center"}}
                        textColor={white}
                        onPress={this.OnEdit_Business}
                        // onPress={()=> alert("Edited")}
                    /> 

                    <Spinner 
                        visible={this.state.Loader}
                        textContent={"...Editing"}
                        textStyle={{color:white, fontFamily:"Bold", fontSize:hp("3%")}}
                    />
                    
                </ScrollView>

                <Toast
                    ref={(toast) => this.toast = toast}
                    style={{backgroundColor:this.state.Success?"green":"red", width:"96%", zIndex:1}}
                    position="bottom"
                    positionValue={hp("-1%")}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                />
             </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        Cat_failed: state.Categories_reducer.failed,
        Cat_success: state.Categories_reducer.success,
        Cat_loader: state.Categories_reducer.loader,
        _Categories: state.Categories_reducer.Categories,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        _LoadCategories:() => dispatch(LoadCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit_Business);

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"white",
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
        marginLeft:hp('1%'),
    },
    InputStyle:{
        borderColor:"lightgray",
        borderWidth:2,
        width:"100%"
    },
    img:{
        width:"80%",
        height:hp("15%"),
        borderColor:"lightgray",
        borderWidth:2,
        borderRadius:hp("0.8%")
    },
    Container:{
        backgroundColor:gray,
        width:hp("8%"),
        height:hp("8%"),
        borderRadius:hp("0.8%"),
        alignItems:"center",
        justifyContent:"center",
    }
});