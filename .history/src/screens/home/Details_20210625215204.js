import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import ImageListCard from '../../components/home-events/ImageListCard';

const Details = () => {
    return(
        <Container>
            <SimpleHeader
                heading={"Sant Martin Restaurant"}
                icon1="share-social"
                icon2="heart"
            />
            <ImageListCard
                text="Chicken wings, Chicken BBQ...."
                image={require('../../assets/images/food.png')}
            />
        </Container>
    )
}
export default Details;

const styles = StyleSheet.create({
    container:{
        
    },
    
})