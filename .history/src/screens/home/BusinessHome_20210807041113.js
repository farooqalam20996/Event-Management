import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';

const BusinessHome = () => {
    return(
        <Container>
            <SimpleHeader
                heading="asddas"
                icon1={"settings"}
                icon1Press={()=>alert('settings')}
            />
        </Container>
    )
}
export default BusinessHome;