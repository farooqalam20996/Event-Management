import React,{useState} from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { Container } from '../../components/common/Container';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../components/common/Header';
import Filter from '../../components/home-events/Filter';
import ImageCard from '../../components/home-events/ImageCard';
import { useNavigation } from '@react-navigation/native';

const Events = () => {

    const [search, setSearch] = useState("")
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('EventDetails')
    }
    return(
        <>
        <Container>
            <Header
                search
                inputValue={search}
                onChange={(text)=>setSearch(text)}
                onSearch={()=>alert(search)}
                icon1="heart-outline"
                icon1Press={()=>navigation.navigate('OtherStack',{screen:'Favorites'})}
                icon2="funnel-outline"
                icon2Press={()=>navigation.navigate('OtherStack',{screen:'Filter'})}
                icon3="settings-outline"
                icon3Press={()=>navigation.navigate('OtherStack',{screen:'Settings'})}
            />
            {/* <Filter filters={filters} /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageCard
                image={require('../../assets/images/event1.png')}
                title={"Rave Party"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA "}
                date={"14-4-1414"}
                onPress={onCardPress}
            />
            <ImageCard
                image={require('../../assets/images/event2.png')}
                title={"Rave Party"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA"}
                date={"14-4-1414"}
                date={"14-4-1414"}
                onPress={onCardPress}
            />
            <ImageCard
                image={require('../../assets/images/event1.png')}
                title={"Rave Party"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA "}
                date={"14-4-1414"}
                onPress={onCardPress}
            />
            <ImageCard
                image={require('../../assets/images/event2.png')}
                title={"Rave Party"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA"}
                date={"14-4-1414"}
                date={"14-4-1414"}
                onPress={onCardPress}
            />
          
            </ScrollView>
        </Container>
        </>
    )
}
export default Events;