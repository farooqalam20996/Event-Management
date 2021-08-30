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
            <View style={{flex:1, justifyContent:'space-between',paddingVertical:hp*'5%'}}>
                <View>
                    <Text>Add Credit/Debit Card</Text>
                    <Text>Name on Card</Text>
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

    },
    text:{

    },
    input:{

    },
    button:{

    }
 })