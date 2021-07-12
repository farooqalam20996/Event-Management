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

const images = {
    "1":require('../../assets/images/food.png'),
    "2":require('../../assets/images/food.png'),
    "3":require('../../assets/images/food.png'),
    "4":require('../../assets/images/food.png'),
}

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
                images={images}
            />
        </Container>
    )
}
export default Details;

const styles = StyleSheet.create({
    container:{
        
    },
    
})