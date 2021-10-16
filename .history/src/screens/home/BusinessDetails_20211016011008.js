import React, { useEffect, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    FlatList,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import ImageListCard from '../../components/home-events/ImageListCard';
import ButtonRow from '../../components/home-events/ButtonRow';
import {Button} from '../../components/common/Button';
import { gray, primary, white, yellow } from '../../assets/colors';
import ReviewCard from '../../components/home-events/ReviewCard';
import ImageCard from '../../components/home-events/ImageCard';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { API } from '../../redux/MainURL';
import { toTitleCase } from '../../utils';
import {Entypo} from "@expo/vector-icons";
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Onshare } from '../../components/common/Share';
import { useSelector } from 'react-redux';
import firebase from '../../firebase';

var axios = require('axios');
var FormData = require('form-data');


const BusinessDetails = ({route}) => {

    const businessDetails = route.params.businessDetails;
    const imagePath = route.params.imgPath;
    const user = useSelector(state => state.LoginReducer.User)

    const [Loader, setLoader]=useState(true);
    const [Success, setSuccess]=useState(false);
    const [BusinessEvent, setBusinessEvent]=useState([]);
    const [offset, setOffset]=useState(1);
    const [isListEnd, SetListEnd]=useState(false);
    const [error, setError]=useState(false);
    const [ShowModal, setShowModal]=useState(false);
    const [Review, setReview]=useState("");
    const [Rating, setRating]=useState(0);
    const [userID, setUserID]=useState(null);
    const [Failed, setFailed]=useState(false);
    const [getReview, setGetReview]=useState([]);
    const [Rev_Loader, setRev_Loader]=useState(false);



    const navigation = useNavigation()
    const { colors } = useTheme();

    const onCardPress = (id, name, favorite) => {
        navigation.navigate('EventsStack',{screen:'EventDetails',params:{EventID: id, EventName:name, favorite}})
    }

    useEffect(()=>{
        console.log(user)
        SpecificBusinessEvents()
        Get_Review()
        AsyncStorage.getItem("user", (err, data)=>{
            setUserID(JSON.parse(data).id)
        })
    },[])
    const sendMessage = () => {
        firebase
        .firestore
        .collection('chats')
        .doc(`${user.firebase_id}_${businessDetails.firebase_id}`)
        .set({
            lastMessage: new Date().getTime(),
            lastMessageText: ``,
            lastMessageBy: ``,
            eventName:'',
            fromID: user.firebase_id,
            fromName: `${user.name}`,
            fromPhoto:user.images,
            fromSqlID:user.id,
            toID: businessDetails.firebase_id,
            toPhoto:getImages()[0],
            toSqlID:businessDetails.id,
            toName: `${businessDetails.name}`,
            read: false,
            readBy: [],
        }).then(()=>{
            firebase.firestore
            .collection('chats')
            .doc(`${user.firebase_id}_${businessDetails.firebase_id}`)
            .collection('messages')
            .add({})
            .then(()=>
                // this.gotoChat()
                navigation.navigate(
                    'ChatRoom',
                    {
                        person:{
                            idUser: businessDetails.id,
                            name:businessDetails.name,
                            image: getImages()[0],
                            // Photo: this.state.user.Photo
                        },
                        chatID:`${user.firebase_id}_${businessDetails.firebase_id}`,
                    }
                )
            )
            .catch((err)=>alert(err))
        }).catch((err)=>{
            alert(err)
        })
    }
    const onLikePress = (event, index) => {
        var config;
        const events = BusinessEvent;
        if(event.favorite){
            events[index].favorite = null;
            var data = new FormData();
            data.append('user_id', userID);
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
            data.append('user_id', userID);
            data.append('event_id', event.id);
    
            config = {
                method: 'post',
                url: API+'jacobanderson_app/public/api/add-favorite-event',
                data : data
            };
           

        }
            // this.setState({Events:events})
            setBusinessEvent(events)
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const SpecificBusinessEvents = () => {
        setLoader(true)
        var config = {
            method: 'get',
            url: API+'jacobanderson_app/public/api/get-events-by-business/'+businessDetails.id,
            params:{page:offset}
        };
        axios(config)
        .then(function (response) {
            if(response.data.success){
                setSuccess(true),
                setError(false)
            }
            else{
                setError(true)
            }
            if(response.data.data.length > 0){
                setLoader(false),
                setOffset(offset+1)
                setBusinessEvent([...BusinessEvent, ...response.data.data])
                setError(false)
            }
            else{
                SetListEnd(true),
                setLoader(false),
                setError(false)
            }
        })
        .catch(function (error) {
            SetListEnd(true)
            setLoader(false),
            setError(true)
        });
    }

    const renderFooter=()=>{
        if(Loader){
            return <ActivityIndicator style={{ padding: 20 }} size="large" color="#0063DE" />
        }
        else{
            return <View style={styles.viewspace} />
            
        }
    }
    const getImages = () => {
        var imgArr = [];
        businessDetails.images.split(',').map(image=>
            imgArr.push(imagePath+'/'+image)
        )
        return imgArr;
    }

    const SpecificBusinessEvent_Loader=()=>{
        if(Success && BusinessEvent.length == 0){
            if(!Loader){
                return(
                    <View style={styles.main} >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'gray', textAlign:"center"}}>No Events Available of this Business </Text>
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
                    data={BusinessEvent}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item,index}) =>
                        <ImageCard
                            style={{height:hp('20%')}}
                            // image={require('../../assets/images/party.png')}
                            image={{uri: item.images? imagePath+"/"+item.images.split(",")[0]:"abc"}}
                            title={item.name}
                            desc={item.description}
                            loc={item.address1+" "+item.address2}
                            onPress={()=> onCardPress(item.id, item.name, item.favorite)}
                            discount={"Discount - 70% Off"}
                            isLike={item.favorite}
                            onLikePress={()=> onLikePress(item, index)}
                        />
                    }
                    ListFooterComponent={renderFooter}
                    onEndReached={SpecificBusinessEvents}
                    onEndReachedThreshold={0.5}
                />
            )
        }
    }

    const Post_Review = ()=>{
        setRev_Loader(true)
        const ReviewArr = getReview; 
        var data = new FormData();
        data.append('user_id', userID);
        data.append('business_id', businessDetails.id);
        data.append('comment', Review);
        data.append('rating', Rating);

        var config = {
        method: 'post',
        url: API+'jacobanderson_app/public/api/add-review',
        data : data
        };
        axios(config)
        .then(function (response) {
            if(response.data.success){
                setRev_Loader(false)
                // ReviewArr.push(response.data.data)
                Get_Review()
                setShowModal(false)
                setReview("")
                setRating(0)
            }
            else{
                setRev_Loader(false)
            }
        })
        .catch(function (error) {
            setRev_Loader(false)
        });
    }
    
    const Get_Review = ()=> {
        setLoader(true)
        var config = {
            method: 'get',
            url: API+'jacobanderson_app/public/api/get-reviews/'+businessDetails.id,
          };
          
          axios(config)
          .then(function (response) {
              if(response.data.success){
                  setLoader(false)
                  setFailed(false)
                  setGetReview(response.data.data)
              }
              else{
                  setLoader(false)
                  setFailed(true)
              }
          })
          .catch(function (error) {
                setLoader(false)
                setFailed(true)
          });
    }
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={toTitleCase(businessDetails.name)}
                icon1="share-social"
                icon1Press={()=> Onshare(toTitleCase(businessDetails.name), businessDetails.description, API)}
                icon2="heart"
                style={{marginBottom:hp('1%')}}
                IfFavrt={businessDetails.favorite !== null?true:false}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageListCard
                    text={businessDetails.email}
                    images={getImages()}
                />
                <ButtonRow
                    button1Icon={"call"}
                    button1Text={businessDetails.phone}
                    button2Icon={"location"}
                    button2Text={"Location"}
                />
                <Button
                    text={"Send Message"}
                    color={primary}
                    textColor={white}
                    style={{width:'100%', height:hp('5%'), marginTop:hp('1%')}}
                    onPress={sendMessage}
                />
                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                    <Text style={[styles.heading,{fontSize:hp('3%'), color:colors.heading}]}>{toTitleCase(businessDetails.name)}</Text>
                    <Text style={[styles.text,{color:colors.text}]}>{businessDetails.address1+" "+businessDetails.address2}</Text>
                </View>
                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                    <Text style={[styles.heading,{color:colors.heading}]}>Description</Text>
                    <Text style={[styles.text,{color:colors.text}]}>{businessDetails.description}</Text>
                </View>
                {
                    Failed?
                        <Text style={[styles.text,{color:colors.text, alignSelf:"center", fontSize:hp("2.5%")}]}> 
                            There Is No Review 
                        </Text>
                    :
                       
                    <>
                        <View style={[styles.row,{justifyContent:'space-between', marginTop:hp("2%")}]} >
                            <Text style={[styles.heading,{color:colors.heading}]}>Reviews</Text>
                            <View style={styles.row}>
                                <StarRating
                                    style={styles.stars}
                                    disabled
                                    maxStars={5}
                                    rating={businessDetails.average_rating}
                                    starSize={hp('2.5%')}
                                    emptyStarColor={yellow}
                                    fullStarColor={yellow}
                                    halfStarColor={yellow}
                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                                <Text style={[styles.text,{marginLeft:hp('1%'),marginTop:0, color:colors.text}]}> 
                                    {businessDetails.average_rating== null?"0":Math.round(businessDetails.average_rating)}/5
                                </Text>
                            </View>
                        </View>
                        {
                            getReview.map(e=>
                                <ReviewCard
                                    Reviewer_name={e.user.name}
                                    ReviewRate={e.rating}
                                    ReviewTxt={e.comment}
                                    key={e.id}
                                />
                            )
                        }
                    </>
                }
                <Button
                    text={"Give Review"}
                    color={primary}
                    textColor={white}
                    style={{width:'100%', height:hp('5%'), marginTop:hp('1%')}}
                    onPress={()=>setShowModal(true)}
                />

                {
                    !Success && !error ?
                        <ActivityIndicator style={{ flex:1}} color="#0063DE" size="large" />
                        :
                        SpecificBusinessEvent_Loader()
                }

                <Modal
                    isVisible={ShowModal}
                    onBackButtonPress={()=> setShowModal(false)}
                    onBackdropPress={()=> setShowModal(false)}
                    animationIn={"slideInLeft"}
                    animationInTiming={600}
                    animationOut={"slideOutRight"}
                    animationOutTiming={400}
                    style={{flex:1}}
                >
                    <View style={[styles.ModalContainer, {backgroundColor:colors.background, borderColor:colors.border, borderWidth:hp("0.2%")}]} >
                        <Entypo name="cross" size={hp("4%")} style={{position:"absolute", right:2, top:2}} onPress={()=> setShowModal(false)} />
                        <Text style={[styles.heading,{color:colors.heading}]}>Give Review</Text>
                        <Text style={[styles.text,{color:colors.text}]}>To: {toTitleCase(businessDetails.name)}</Text>
                        <TextInput
                            style={[styles.desc]}
                            value={Review}
                            onChangeText={(text)=>setReview(text)}
                            multiline
                            placeholder="Enter Review"
                        />
                        <StarRating
                            containerStyle={{alignSelf:"flex-start"}}
                            maxStars={5}
                            rating={Rating}
                            starSize={hp('3%')}
                            emptyStarColor={yellow}
                            fullStarColor={yellow}
                            halfStarColor={yellow}
                            selectedStar={(rating) => setRating(rating)}
                        />
                         <Text style={[styles.text,{color:colors.text}]}>{Rating}/5</Text>
                         <Button
                            text={"Submit Review"}
                            color={primary}
                            textColor={white}
                            style={{width:'90%', height:hp('5%'), marginTop:hp('2%'), alignSelf:"center"}}
                            onPress={Post_Review}
                            Loading={Rev_Loader}
                            disabled={Rev_Loader}
                        />
                    </View>
                </Modal>
            </ScrollView>
        </Container>
    )
}
export default BusinessDetails;

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
    main:{
        flex:1,
        marginVertical:hp("3%"),
        backgroundColor:"transparent"
    },
    viewspace:{
        marginBottom:'3%'
    },
    List_style:{
        width:"100%", 
        alignSelf:"center",
        padding:'5%',
    },
    ModalContainer:{
        width:"100%",
        height:hp("50%"),
        backgroundColor:white,
        padding:hp("1.6%"),
        borderRadius:hp("1.2%")
    },
    desc:{
        height:hp('12%'),
        paddingHorizontal:hp('1%'),
        marginTop:hp('2%'),
        backgroundColor:'#ECECEC',
        borderRadius:hp('1%'),
        marginBottom:hp("2%")
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
})