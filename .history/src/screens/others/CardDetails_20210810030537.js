import React from 'react';
import { 
    Text,
    View,
    StyleSheet
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
           
        </Container>
    )
 }
 export default CardDetails;