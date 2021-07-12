import React from 'react';
import {
    View,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Row from '../../components/common/Row';

const items = [
    {
        id:1,
        text:"Account Settings",
        icon:"person",
        navigation:"theme",
    },
    {
        id:2,
        text:"Notifications",
        icon:"notifications",
        navigation:"theme",
    },
    {
        id:3,
        text:"Favorites",
        icon:"heart",
        navigation:"theme",
    },
    {
        id:4,
        text:"Theme",
        icon:"color-palette",
        navigation:"theme",
    },
    {
        id:5,
        text:"About App",
        icon:"information-circle",
        navigation:"theme",
    },
]

const Settings = () => {
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {items.map(item=>
                <Row
                    iconLeft={item.icon}
                    text={item.text}
                />
            )}
        </Container>
    )
}
export default Settings;