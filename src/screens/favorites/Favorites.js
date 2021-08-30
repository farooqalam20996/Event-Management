import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';

const items = [
    {
        id:1,
        text:"Sant Martin has 15% Discount available",
    },
    {
        id:2,
        text:"Rave Party near your location",
    },
    {
        id:3,
        text:"Sant Martin has 15% Discount available",
    },
    {
        id:4,
        text:"Rave Party near your location",
    },
    {
        id:5,
        text:"Sant Martin has 15% Discount available",
    },
    
   
]

const Favorites = () => {

    return(
       <Container>
            <SimpleHeader
                heading={"Favorites"}
            />
            <View style={{marginTop:hp('3%')}}/>
            <ScrollView>
                {items.map(item=>
                    <View key={item.id}>
                        <Row 
                            icon={'heart'}
                            data={item}
                            onPress={()=>alert(item.text)}  
                        />
                    </View>
                )}
            </ScrollView>
       </Container>
    )
}
export default Favorites;

const styles = StyleSheet.create({
   
})