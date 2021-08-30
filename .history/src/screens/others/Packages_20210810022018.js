import React from 'react';
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import PackageCard from '../../components/other/PackageCard';

 const Packages = () => {
    return(
        <Container>
            <Header
                backIcon
                heading="Packages"
            />
            <PackageCard
                
            />
        </Container>
    )
 }
 export default Packages;