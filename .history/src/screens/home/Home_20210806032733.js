import React,{useState} from 'react';
import {
    ScrollView
} from 'react-native';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import Filter from '../../components/home-events/Filter';
import ImageCard from '../../components/home-events/ImageCard';
import { headerIcons, icons } from '../../constants';

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
                icons={headerIcons}
            />
            {/* <Filter filters={filters} /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageCard
                image={require('../../assets/images/food.png')}
                title={"Sant Martin Restaurant"}
                desc={"Chicken wings, Chicken BBQ...."}
                loc={"14th Street, NewYork, USA"}
                discount={"Discount - 70% Off"}
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
                title={"Rave Party"}
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