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

const icons = [
    {
        id:1,
        name:'heart-outline',
        action:'favorites'
    },
    {
        id:2,
        name:'funnel-outline',
        action:'filter'
    },
    {
        id:3,
        name:'settings-outline',
        action:'settings'
    }
]

const filters = [
    {
        id:1,
        name:"Golf",
    },
    {
        id:2,
        name:"Theaters",
    },
    {
        id:3,
        name:"Sky Diving",
    },
    {
        id:4,
        name:"Restaurants",
    },
    {
        id:5,
        name:"Football",
    },
    {
        id:6,
        name:"Cricket",
    },
    {
        id:7,
        name:"Tennis",
    }
]

const Home = () => {
    const [search, setSearch] = useState("")
    return(
        <>
        <Container>
            <Header
                search
                inputValue={search}
                onChange={(text)=>setSearch(text)}
                onSearch={()=>alert(search)}
                icons={icons}
            />
            <Filter filters={filters} />
            <ScrollView>
            <ImageCard
                image={require('../../assets/images/food.png')}
                title={"Sant Martin Restaurant"}
                desc={"Chicken wings, Chicken BBQ...."}
                loc={"14th Street, NewYork, USA"}
            />
            <ImageCard
                image={require('../../assets/images/party.png')}
                title={"Rave Party"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA "}
            />
            <ImageCard
                image={require('../../assets/images/food.png')}
                title={"Sant Martin Restaurant"}
                desc={"Chicken wings, Chicken BBQ...."}
                loc={"14th Street, NewYork, USA"}
            />
            <ImageCard
                image={require('../../assets/images/party.png')}
                title={"Sant Martin Restaurant"}
                desc={"Beers, Masks and DJ Music...."}
                loc={"14th Street, NewYork, USA"}
            />
            <ImageCard
                image={require('../../assets/images/food.png')}
                title={"Sant Martin Restaurant"}
                desc={"Chicken wings, Chicken BBQ...."}
                loc={"14th Street, NewYork, USA"}
            />
            </ScrollView>
        </Container>
        </>
    )
}
export default Home;