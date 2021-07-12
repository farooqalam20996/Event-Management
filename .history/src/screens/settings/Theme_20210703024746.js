import React from 'react';
import {
    View,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from '../../theme/ThemeContext';

const options = [
    {
        id:1,
        text:"Light",
    },
    {
        id:2,
        text:"Dark",
    },
    {
        id:3,
        text:"System Default",
    },
]

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
            {options.map(item=>
                <Row
                    iconLeft={item.icon}
                    text={item.text}
                />
            )}
        </Container>
    )
}
export default Theme;