import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';

const CreateEvent = () => {
    return(
        <Container>
            <Header
                heading="Create Event"
            />
        </Container>
    )
}
export default CreateEvent