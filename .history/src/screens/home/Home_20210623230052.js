import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Container } from '../../components/common/Container';
import { Header } from '../../components/common/Header';

const icons = [
    {
        id:1,
        name:'heart',
        action:'favorites'
    },
    {
        id:2,
        name:'funnel',
        action:'filter'
    },
    {
        id:3,
        name:'settings-outline',
        action:'settings'
    }
]

const Home = () => {
    return(
        <Container>
            <Header
                search
                icons={icons}
            />
        </Container>
    )
}
export default Home;