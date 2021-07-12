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
import ButtonRow from '../../components/home-events/ButtonRow';

const images = {
    "1":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
    "2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU",
    "3":"https://lh3.googleusercontent.com/proxy/wzOWACHtfc2Yo0cAzAaIAkSlefrelHS_eG7VH51Q3E1sfhXSeNddUrWMJQM3ltmzaIR-YZ_NDTDeFjiVgZ_nnRGU1vaslLvpVqZMtfaBtJilp_bdiw",
    "4":"https://aussiegossip.com.au/wp-content/uploads/2020/09/pexels-photo-1633578.jpeg",
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
            <ButtonRow
                button1Icon={"call"}
                button1Text={"+1 (234) 4567"}
                button2Icon={"location"}
                button2Text={"14th Street..."}
            />
        </Container>
    )
}
export default Details;

const styles = StyleSheet.create({
    container:{
        
    },
    
})