import React from 'react';
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';

 const Packages = () => {
    return(
        <Container>
            <Header
                backIcon
                heading="Packages"
            />
            
        </Container>
    )
 }
 export default Packages;