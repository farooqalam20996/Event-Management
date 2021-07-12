import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';

const categories = [
    {
        id:1,
        text:"Golf",
    },
    {
        id:2,
        text:"Theaters",
    },
    {
        id:3,
        text:"Sky Diving",
    },
    {
        id:4,
        text:"Hotels",
    },
    {
        id:5,
        text:"Restaurants",
    },
    {
        id:6,
        text:"Events",
    },
    {
        id:7,
        text:"Parties",
    },
]

const Categories = () => {
    return(
       <Container>
            <SimpleHeader
                heading={"Categories"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {categories.map(cat=>
                <View key={cat.id}>
                    <Row data={item}/>
                </View>
            )}
       </Container>
    )
}
export default Categories;
