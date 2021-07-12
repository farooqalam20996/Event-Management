import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Row from '../../components/common/Row';

const notifications = [
    {
        id:1,
        text:"Account Settings",
        icon:"user"
    },
    {
        id:2,
        text:"Notifications",
        icon:"bell"
    },
    {
        id:3,
        text:"Favorites",
        icon:"bell"
    },
    {
        id:4,
        text:"About App",
        icon:"bell"
    },
]

const Settings = () => {
    return(
        <Container>
            <SimpleHeader
                heading={"Notifications"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {notifications.map(item=>
                <Row
                    iconLeft={item.icon}
                    text={item.text}
                />
            )}
        </Container>
    )
}
export default Settings;