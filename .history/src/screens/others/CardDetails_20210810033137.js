import React, {useState} from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TextInput
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black } from '../../assets/colors';
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
                        onChangeText={(text)=>setName(text)}
                    />
                    <Text style={styles.text}>Credit Card Number</Text>
                    <TextInput
                        style={styles.input}
                        value={cardNo}
                        onChangeText={(text)=>setCardNo(text)}
                    />
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Expiry</Text>
                        <TextInput
                            style={styles.input}
                            value={cardNo}
                            onChangeText={(text)=>setCardNo(text)}
                        />
                        <TextInput
                            style={styles.input}
                            value={cardNo}
                            onChangeText={(text)=>setCardNo(text)}
                        />
                        <Text style={styles.text}>CVV</Text>
                        <TextInput
                            style={styles.input}
                            value={cardNo}
                            onChangeText={(text)=>setCardNo(text)}
                        />
                    </View>
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
        height:hp('5%'),
        shadowOffset:{ width:2, height:0},
        shadowRadius:5,
        shadowOpacity:0.8,
        shadowColor:black,
        elevation:5,

    },
    button:{

    }
 })