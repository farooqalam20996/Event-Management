import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';

const Notifications = () => {
    return(
       <Container>
           <SimpleHeader
               heading={"Notifications"}
           />
       </Container>
    )
}
export default Notifications;

const styles = StyleSheet.create({
    
})