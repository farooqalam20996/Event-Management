import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';

const notifications = [
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

const Notifications = () => {
    return(
       <Container>
            <SimpleHeader
                heading={"Notifications"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {notifications.map(notification=>
                <View key={notification.id}>
                    <Row data={notification}/>
                </View>
            )}
       </Container>
    )
}
export default Notifications;
