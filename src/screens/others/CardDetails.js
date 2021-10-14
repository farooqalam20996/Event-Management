import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary, white } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import { setItem } from '../../persist-storage';
import { useTheme } from '../../theme/ThemeContext';
import {Entypo} from "@expo/vector-icons";
// import { requestOneTimePayment, requestBillingAgreement } from 'react-native-paypal'; 

var stripe = require("stripe-client")('pk_test_51JZhS1B0GIZbIiNiTUydZXf1ES1nywg19iBeJ4MCG8Q3rqKOxfoCQPmHKkPVObPpkA4XmlKnMxf3TaLLDCrUIhxi00uINAR31L')

 const CardDetails = ({navigation}) => {
    
    let cardno;
    let mm;
    let yy;
    let cvv;

    const {colors} = useTheme();
    const [name, setName] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [MM, setMM] = useState('');
    const [YY, setYY] = useState('');
    const [CVV, setCVV] = useState('');
    const [userType, setUserType] = useState(null);

    useEffect(()=>{
        AsyncStorage.getItem('user', (err, data)=> {
            setUserType(JSON.parse(data).type)
        })
        // PayPal();
    })
    
    const payInvoice = async () =>{
        if(userType === "company"){
            await setItem('paid','true')
            navigation.navigate('CreateEvent')
        }
        else{
            alert("Seat Resereved paid")
        }
    }


    /// Create Stripe Token For Payment
    const handleToken =async ()=>{
        const information = {
            card: {
                number:  cardNo,
                exp_month:parseInt(MM),
                exp_year:  parseInt(YY),
                cvc: CVV,
                name: name,
            }
          }

        var card = await stripe.createToken(information)

        if(card.error){
            alert(JSON.stringify(card.error.code || card.error.type))
        }   
        else{
            alert(JSON.stringify(card.id))
            console.log(JSON.stringify(card.id))
        }
    }

    // const PayPal = async() => {
    //     const {
    //         nonce,
    //         payerId,
    //         email,
    //         firstName,
    //         lastName,
    //         phone
    //     } = await requestOneTimePayment(
    //       token,
    //       {
    //         amount: '5', 
    //         currency: 'GBP',
    //         localeCode: 'en_GB', 
    //         shippingAddressRequired: false,
    //         userAction: 'commit', 
    //         intent: 'authorize', 
    //       }
    //     );
    // }
    
    return(
        <Container>
            <Header
                backIcon
                heading="Packages"
            />
            <View style={{flex:1, justifyContent:'space-between',paddingVertical:hp('5%')}}>
                <View >
                    <Text style={[styles.heading,{color:colors.text}]}>Add Credit/Debit Card</Text>
                    <Text style={[styles.text,{marginTop:hp('4%'), color:colors.text}]}>Name on Card</Text>
                    <TextInput
                        style={[styles.input,{color:colors.text}]}
                        value={name}
                        placeholder={"Enter Card Name"}
                        placeholderTextColor={colors.border}
                        onChangeText={(text)=>setName(text)}
                        onSubmitEditing={()=>cardno.focus()}
                        blurOnSubmit={false}
                    />
                    <Text style={[styles.text,{color:colors.text}]}>Credit Card Number</Text>
                    <View style={[styles.input,{flexDirection:'row',alignItems:'center'}]}>
                        <TextInput
                            style={[styles.input,{width:'90%',borderWidth:0, padding:0, marginTop:0, color:colors.text, paddingLeft:0}]}
                            value={cardNo}
                            placeholder={"Enter Card Number"}
                            placeholderTextColor={colors.border}
                            onChangeText={(text)=>setCardNo(text)}
                            ref={input => cardno = input }
                            onSubmitEditing={()=>mm.focus()}
                            blurOnSubmit={false}
                        />
                        <Image style={{height:15, width:25}} source={require('../../assets/images/mastercard.png')}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:hp('1%'),justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row', flex:1}}>
                            <View>
                                <Text style={[styles.text,{color:colors.text}]}>Expiry</Text>
                                <TextInput
                                    style={[styles.input]}
                                    value={MM}
                                    placeholder={"Enter MM"}
                                    placeholderTextColor={colors.border}
                                    onChangeText={(text)=>setMM(text)}
                                    ref={input => mm = input }
                                    onSubmitEditing={()=>yy.focus()}
                                    blurOnSubmit={false}
                                />
                            </View>
                            <TextInput
                                style={[styles.input,{alignSelf:'flex-end',marginLeft:hp('1%')}]}
                                value={YY}
                                placeholder={"Enter YY"}
                                placeholderTextColor={colors.border}
                                onChangeText={(text)=>setYY(text)}
                                ref={input => yy = input }
                                onSubmitEditing={()=>cvv.focus()}
                                blurOnSubmit={false}
                            />
                        </View>
                        <View>
                            <Text style={[styles.text,{color:colors.text}]}>CVV</Text>
                            <TextInput
                                style={[styles.input,{width:hp('20%')}]}
                                value={CVV}
                                placeholder={"Enter CVV"}
                                placeholderTextColor={colors.border}
                                onChangeText={(text)=>setCVV(text)}
                                ref={input => cvv = input }
                                onSubmitEditing={payInvoice}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={payInvoice} style={styles.button}>
                        <Text style={{color:white, fontFamily:'Regular', fontSize:hp('2.25%'),padding:hp('1.5%')}}>
                            PAY INVOICE
                        </Text>
                    </TouchableOpacity>

                    <Text style={{marginVertical:hp("2%"), fontSize:hp("1.8%"), alignSelf:"center", color:black, fontFamily:"Bold"}} >
                         OR 
                    </Text>

                    <TouchableOpacity onPress={payInvoice} style={[styles.button, {width:"100%", flexDirection:'row'}]}>
                        <Text style={{color:white, fontFamily:'Regular', fontSize:hp('2.25%'),padding:hp('1.5%')}}>
                            Pay with PayPal
                        </Text>
                        <Entypo name="paypal" size={hp("3%")} color={"white"} />
                    </TouchableOpacity>
                </View>
                {/* <View>
                    <Text>Debit or Credit cards are accepted</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.image} source={require('../../assets/images/mastercard.png')}/>
                    </View>
                </View> */}
            </View>
           
        </Container>
    )
 }
 export default CardDetails;

 const styles = StyleSheet.create({
    heading:{
        fontSize:hp('3%'),
        fontFamily:'Regular',
        marginTop:hp('-2%')
    },
    text:{
        marginTop:hp('2%'),
        fontSize:hp('2%'),
        fontFamily:'Regular'
    },
    input:{
        marginTop:hp('1%'),
        height:hp('6%'),
        paddingHorizontal:hp('1%'),
        // shadowOffset:{ width:1, height:0},
        // shadowRadius:1,
        // shadowOpacity:0.8,
        // shadowColor:black,
        // elevation:2,
        borderWidth:1.25,
        borderRadius:hp('1%'),
        borderColor:primary
    },
    button:{
        marginTop:hp('5%'),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        backgroundColor:primary,
        borderRadius:hp('1%'),
    }
 })