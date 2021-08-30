import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import ImageCard from '../../components/home-events/ImageCard';
import BusinessHomeInitial from '../../components/home-events/BusinessHomeInitial';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BusinessHome = () => {
    const [events, setEvents] = useState([1]);
    const onCardPress = () => {
        alert('press')
    }
    return(
        <Container>
            <Header
                heading="Welcome, David Martin"
                icon1={"settings"}
                icon1Press={()=>alert('settings')}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
            {events.length > 0
                ? 
                <>
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/food.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        discount={"Discount - 70% Off"}
                        onPress={onCardPress}
                    />
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/party.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        discount={"Discount - 70% Off"}
                        onPress={onCardPress}
                    />
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/food.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        onPress={onCardPress}
                    />
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/party.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        onPress={onCardPress}
                    />
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/food.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        discount={"Discount - 70% Off"}
                        onPress={onCardPress}
                    />
                    <ImageCard
                        style={{height:hp('20%')}}
                        image={require('../../assets/images/party.png')}
                        title={"Sant Martin Restaurant"}
                        desc={"Chicken wings, Chicken BBQ...."}
                        loc={"14th Street, NewYork, USA"}
                        discount={"Discount - 70% Off"}
                        onPress={onCardPress}
                    />
                </>                 
                : 
                <BusinessHomeInitial/>
            }
            </ScrollView>
        </Container>
    )
}
export default BusinessHome;