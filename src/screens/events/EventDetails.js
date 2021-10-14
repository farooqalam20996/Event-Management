import React, { useEffect, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import ImageListCard from '../../components/home-events/ImageListCard';
import ButtonRow from '../../components/home-events/ButtonRow';
import { gray, primary, purple, white } from '../../assets/colors';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { API } from '../../redux/MainURL';
import { toTitleCase } from '../../utils';
import Modal from "react-native-modal";
import Reservation from './Reservation';
import { ShowMonth_Letter } from '../../components/common/Check_month';
import { Onshare } from '../../components/common/Share';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-easy-toast';

var axios = require('axios');

const EventDetails = ({route}) => {

    let toast;

    const navigation = useNavigation();
    const { colors } = useTheme();

    const [Loader, SetLoader] = useState(true);
    const [Failed, SetFailed] = useState(false);
    const [Error, SetError] = useState("");
    const [ImgPath, SetImgPath] = useState(null);
    const [type, SetType] = useState(null);
    const [EventDetails, setEventDetails] = useState({});
    const [ShowModal, setShowModal] = useState(false);
    const [isVisible, SetIsVisible] = useState(false);
    const [Cancel_Loader, SetCancel_Loader] = useState(false);
    const [Cancel_Failed, SetCancel_Failed] = useState(false);
    const [Cancel_Error, SetCancel_Error] = useState(true);
    const [Cancel_Success, SetCancel_Success] = useState(true);

    const EventID = route.params.EventID
    const EventName = route.params.EventName

    const tokenn = useSelector(state=> state.LoginReducer.User.token )

    useEffect(()=>{
        AsyncStorage.getItem('user', (err, data)=>{
            SetType(JSON.parse(data).type)
           }
        )
        getEventDetails()
    },[])

    const getEventDetails = () =>{
            var config = {
            method: 'get',
            url:API+'jacobanderson_app/public/api/get-event-detail/'+EventID,
            headers: { 
                'Authorization': 'Bearer '+tokenn, 
              }
            };

            console.log(config)
            axios(config)
            .then(function (response) {
                if(response.data.success){
                    setEventDetails(response.data.data)
                    SetImgPath(response.data.image_path)
                    SetLoader(false)
                    SetError("Event Has No Details ")
                }
                else{
                    SetLoader(false),
                    SetFailed(true),
                    SetError(response.data.message)
                }
            })
            .catch(function (error) {
                SetLoader(false),
                SetFailed(true),
                SetError("Something went wrong")
                console.log(error);
            });
    }
    const getImages = () => {
        
        console.log('image', EventDetails.images)
        var imgArr = [];
        EventDetails.images.split(',').map(image=>
            imgArr.push(ImgPath+'/'+image)
        )
        return imgArr;
    }

    const GetResevation = () => {
        setShowModal(false)
        navigation.navigate("OtherStack", {screen:"CardDetails"})
    }

    const Event_Cancel = () => {
        SetCancel_Loader(true)
        var config = {
        method: 'get',
            url: API+'jacobanderson_app/public/api/remove-events/'+EventID,
        };
        console.log("Check API: ", config)
        axios(config)
        .then(function (response) {
            if(response.data.success){
                SetCancel_Loader(false)
                SetIsVisible(false)
                SetCancel_Success(true)
                // toast.show("Event has been deleted",1000)
            }
            else{
                SetCancel_Loader(false)
                SetCancel_Failed(true)
                SetIsVisible(false)
                SetCancel_Success(false)
                // toast.show("Event is not cancel",1000)
            }
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
            SetCancel_Loader(false)
            SetCancel_Failed(true)
            SetIsVisible(false)
            SetCancel_Success(false)
            // toast.show("Something went wrong",1000)
        });
    }

    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={toTitleCase(EventName)}
                icon1="share-social"
                icon1Press={()=> Onshare(toTitleCase(EventDetails.name), EventDetails.description, API)}
                icon2={type !=="company"&&"heart"}
                IfFavrt={route.params.favorite}
                style={{marginBottom:hp('1%')}}
            />
           
                {
                    Loader?
                        <ActivityIndicator style={{flex:1}} size={"large"} color={purple} />
                        :
                        Failed || EventDetails == null?
                            <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
                                <Text style={[styles.heading,{fontSize:hp('3%'), color:colors.heading}]}> 
                                    {Error}
                                </Text>
                            </View>
                        :
                        <>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                {console.log('checking')}
                                <ImageListCard
                                    text={EventDetails.date}
                                    images={getImages()}
                                />
                                <ButtonRow
                                    button1Icon={"call"}
                                    button1Text={EventDetails.phone}
                                    button2Icon={"location"}
                                    button2Text={"Location"}
                                />
                                
                                {
                                    type=="company"?
                                        <>
                                            <TouchableOpacity style={styles.btn} onPress={()=> SetIsVisible(true)} >
                                                <Text style={styles.btnTxt} > Cancel Event </Text>
                                            </TouchableOpacity>
                                        </>
                                    :    
                                        <ButtonRow
                                            button1Icon={"mail"}
                                            button1Text={"Send Message"}
                                            button2Icon={"calendar"}
                                            button2Text={"reservation"}
                                            // button2Press={()=>navigation.navigate('Reservation')}
                                            button2Press={()=> setShowModal(true)}
                                        />
                                }
                                
                                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                                    <Text style={[styles.heading,{fontSize:hp('3%'), color:colors.heading}]}>{toTitleCase(EventDetails.name)}</Text>
                                    <Text style={[styles.text,{color:colors.text}]}>{EventDetails.address1+" "+EventDetails.address2}</Text>
                                </View>
                                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                                    <Text style={[styles.heading,{color:colors.heading}]}>Description</Text>
                                    <Text style={[styles.text,{color:colors.text}]}>{EventDetails.description}</Text>
                                </View>
                            </ScrollView>
                            <Modal
                                isVisible={ShowModal}
                                onBackButtonPress={()=> setShowModal(false)}
                                onBackdropPress={()=> setShowModal(false)}
                                animationIn={"slideInUp"}
                                animationInTiming={600}
                                animationOut={"slideOutDown"}
                                animationOutTiming={400}
                                style={{flex:1}}
                                backdropOpacity={0.5}
                            >
                                <View style={styles.ModalContainer} >
                                        <View style={{width:"25%", height:hp("0.6%"), backgroundColor:"lightgray", alignSelf:"center", borderRadius:hp("2%")}} />
                                        <Reservation 
                                            R_Seats={"15"}
                                            T_Seats={EventDetails.reservation}
                                            Price={"125"}
                                            Onpress={()=> GetResevation()}
                                            date={EventDetails.date.split(" ")[0].split("-")[2]}
                                            mm={ShowMonth_Letter(EventDetails.date.split(" ")[0].split("-")[1])}
                                        />
                                </View>
                            </Modal>
                            <AwesomeAlert 
                                show={isVisible}   
                                showProgress={Cancel_Loader}
                                progressSize={hp("3%")}
                                progressColor={primary}                                 
                                title="Event Cancel"
                                titleStyle={{fontSize:16,lineHeight:20,fontFamily:"Bold",color:'black', }}
                                message="Are You Sure Cancel Event"
                                messageStyle={{ fontSize:14, lineHeight:20, fontFamily:"Regular", color:'black' }}
                                closeOnTouchOutside={true}
                                closeOnHardwareBackPress={true}
                                showCancelButton={true}
                                cancelButtonStyle={{ backgroundColor:primary, minWidth:hp("10%"), alignItems:"center", justifyContent: 'center' }}
                                cancelButtonTextStyle={{ fontSize:13,lineHeight:16,fontFamily:"Regular",color:"white", }}
                                showConfirmButton={true}
                                confirmButtonStyle={{ backgroundColor:primary, minWidth:hp("10%"), alignItems:"center", justifyContent: 'center' }}
                                confirmButtonTextStyle={{ fontSize:13,lineHeight:16,fontFamily:"Regular",color:"white", }}
                                cancelText="No"
                                confirmText="Yes"
                                confirmButtonColor="#DD6B55"
                                onCancelPressed={() => SetIsVisible(false)}
                                onConfirmPressed={Event_Cancel}
                                contentContainerStyle={{ backgroundColor:"white", width:"80%" , height:150 }}
                            
                            />
                             <Toast
                                ref={toast => (toast = toast)}
                                style={{backgroundColor:"black", width:"96%", zIndex:1}}
                                position="bottom"
                                positionValue={hp("1%")}
                                fadeInDuration={750}
                                fadeOutDuration={1000}
                                opacity={0.8}
                                textStyle={{color:'white', fontFamily:"Bold", fontSize:hp("1.8%")}}
                            />
                            {/* <Spinner 
                                visible={Cancel_Loader}
                                textContent={"Event Cancelling"}
                                textStyle={{fontFamily:"Bold", color:"white", fontSize:hp("3%")}}
                            /> */}
                            
                        </>
                }
                
        </Container>
    )
}
export default EventDetails;

const styles = StyleSheet.create({
    textContainer:{
        paddingTop:hp('2.5%'),
        paddingBottom:hp('2%'),
        borderBottomWidth:2,
        borderBottomColor:gray,
    },
    heading:{
        color:'#474747',
        fontFamily:'Bold',
        fontSize:hp('2.5%')
    },
    text:{
        marginTop:hp('1.5%'),
        fontFamily:'Regular',
        fontSize:hp('2%')
    },
    ModalContainer:{
        top:hp("30%"),
        width:"112%",
        height:hp("50%"),
        backgroundColor:white,
        padding:hp("1.6%"),
        alignSelf:"center",
    },
    btn:{
        width:"100%",
        height:hp("5%"),
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:"red",
        borderRadius:hp("1%"),
        marginTop:hp("2%")
    },
    btnTxt:{
        color:white,
        fontFamily:'Bold',
        fontSize:hp('2%')
    }
})