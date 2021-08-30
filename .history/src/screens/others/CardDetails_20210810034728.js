import React, {useState} from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary, white } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';

 const CardDetails = () => {
     
    const [name, setName] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [MM, setMM] = useState('');
    const [YY, setYY] = useState('');
    const [CVV, setCVV] = useState('');
    const onPackagePress = () => {
        alert('asd')
    }
    return(
        <Container>
            <Header
                backIcon
                heading="Packages"
            />
            <View style={{flex:1, justifyContent:'space-between',paddingVertical:hp('5%')}}>
                <View >
                    <Text style={styles.heading}>Add Credit/Debit Card</Text>
                    <Text style={styles.text}>Name on Card</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        placeholder={"Enter Card Name"}
                        onChangeText={(text)=>setName(text)}
                    />
                    <Text style={styles.text}>Credit Card Number</Text>
                    <TextInput
                        style={styles.input}
                        value={cardNo}
                        placeholder={"Enter Card Number"}
                        onChangeText={(text)=>setCardNo(text)}
                    />
                    <View style={{flexDirection:'row',marginTop:hp('1%'),justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row', flex:1}}>
                            <View>
                                <Text style={styles.text}>Expiry</Text>
                                <TextInput
                                    style={[styles.input]}
                                    value={cardNo}
                                    placeholder={"Enter MM"}
                                    onChangeText={(text)=>setCardNo(text)}
                                />
                            </View>
                            <TextInput
                                style={[styles.input,{alignSelf:'flex-end',marginLeft:hp('1%')}]}
                                value={cardNo}
                                placeholder={"Enter YY"}
                                onChangeText={(text)=>setCardNo(text)}
                            />
                        </View>
                        <View>
                            <Text style={[styles.text]}>CVV</Text>
                            <TextInput
                                style={[styles.input,{width:hp('20%')}]}
                                value={cardNo}
                                placeholder={"Enter CVV"}
                                onChangeText={(text)=>setCardNo(text)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text,{color:white}]}>
                            PAY
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Debit or Credit cards are accepted</Text>
                </View>
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
        borderRadius:hp('1%'),
        paddingHorizontal:hp('3%'),
        paddingVertical:hp('5%'),
    }
 })