import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TextInput
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';

 const CardDetails = () => {
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
                    />
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
        fontFamily:'Regular'
    },
    text:{
        marginTop:hp('2%')
    },
    input:{

    },
    button:{

    }
 })