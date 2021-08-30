import React from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import ImageListCard from '../../components/home-events/ImageListCard';
import ButtonRow from '../../components/home-events/ButtonRow';
import { gray } from '../../assets/colors';
import ReviewCard from '../../components/home-events/ReviewCard';
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const images = {
    "1":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg",
    "2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU",
    "3":"https://lh3.googleusercontent.com/proxy/wzOWACHtfc2Yo0cAzAaIAkSlefrelHS_eG7VH51Q3E1sfhXSeNddUrWMJQM3ltmzaIR-YZ_NDTDeFjiVgZ_nnRGU1vaslLvpVqZMtfaBtJilp_bdiw",
    "4":"https://aussiegossip.com.au/wp-content/uploads/2020/09/pexels-photo-1633578.jpeg",
}

const EventDetails = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Sant Martin Restaurant"}
                icon1="share-social"
                icon2="heart"
                style={{marginBottom:hp('1%')}}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <ButtonRow
                    button1Icon={"mail"}
                    button1Text={"Send Message"}
                    button2Icon={"calendar"}
                    button2Text={"Reservation"}
                    button2Press={()=>navigation.navigate('Events',{screen:'Reservation'})}
                />
                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                    <Text style={[styles.heading,{fontSize:hp('3%'), color:colors.heading}]}>Sant Martin Restaurant</Text>
                    <Text style={[styles.text,{color:colors.text}]}>Chicken wings, Chicken BBQ....</Text>
                </View>
                <View style={[styles.textContainer,{borderBottomColor:colors.border}]}>
                    <Text style={[styles.heading,{color:colors.heading}]}>Description</Text>
                    <Text style={[styles.text,{color:colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
                <ReviewCard/>
            </ScrollView>
        </Container>
    )
}
export default EventDetails;

const styles = StyleSheet.create({
    textContainer:{
        paddingTop:hp('2.5%'),
        paddingBottom:hp('2%'),
        borderBottomWidth:2,
        borderBottomColor:gray,
    },
    heading:{
        color:'#474747',
        fontFamily:'Bold',
        fontSize:hp('2.5%')
    },
    text:{
        marginTop:hp('1.5%'),
        fontFamily:'Regular',
        fontSize:hp('2%')
    }
})