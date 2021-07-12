import React from 'react';
import {
    View,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from '../../theme/ThemeContext';

// const items = [
//     {
//         id:1,
//         text:"Account Settings",
//         icon:"person"
//     },
//     {
//         id:2,
//         text:"Notifications",
//         icon:"notifications"
//     },
//     {
//         id:3,
//         text:"Favorites",
//         icon:"heart"
//     },
//     {
//         id:4,
//         text:"About App",
//         icon:"information-circle"
//     },
// ]

const Theme = () => {
    const {setScheme, isDark} = useTheme()
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Theme Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {/* {notifications.map(item=>
                <Row
                    iconLeft={item.icon}
                    text={item.text}
                />
            )} */}
        </Container>
    )
}
export default Theme;