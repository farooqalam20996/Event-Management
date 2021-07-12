import React,{useState} from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Container } from '../../components/common/Container';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../components/common/Header';
import Filter from '../../components/Filter';

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
            <View style={{height:hp('6%'), marginRight:hp('-4.5%'), marginLeft:hp('4%'), paddingTop:hp('2%')}}>
            <Filter filters={filters} />
            </View>
        </Container>
        </>
    )
}
export default Home;