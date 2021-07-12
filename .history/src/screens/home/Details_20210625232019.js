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
    "1":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
    "2":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
    "3":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
    "4":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
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