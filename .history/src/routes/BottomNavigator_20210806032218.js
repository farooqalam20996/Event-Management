import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, gray } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import IconInput from '../../components/common/IconInput';
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

const Wishlist = () => {

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
                            icon
                            data={item}
                            onPress={()=>alert(item.text)}  
                        />
                    </View>
                )}
            </ScrollView>

       </Container>
    )
}
export default Wishlist;

const styles = StyleSheet.create({
    
})