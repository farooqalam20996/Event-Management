import React from 'react';
import {
    View,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Row from '../../components/common/Row';
import { useNavigation } from '@react-navigation/native';

const items = [
    {
        id:1,
        text:"Account Settings",
        iconLeft:"person",
        action:"theme",
    },
    {
        id:2,
        text:"Notifications",
        iconLeft:"notifications",
        action:"theme",
    },
    {
        id:3,
        text:"Favorites",
        iconLeft:"heart",
        action:"theme",
    },
    {
        id:4,
        text:"Theme",
        iconLeft:"color-palette",
        action:"theme",
    },
    {
        id:5,
        text:"About App",
        iconLeft:"information-circle",
        action:"theme",
    },
]

const Settings = () => {
    const navigation = useNavigation();
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {items.map(item=>
                <View key={item.id}>
                    <Row 
                        data={item}
                        onPress={()=>navigation.navigate(item.action)}    
                    />
                </View>
            )}
        </Container>
    )
}
export default Settings;