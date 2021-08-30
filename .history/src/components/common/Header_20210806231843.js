import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, gray, lightGray } from '../../assets/colors';
import { headerIcons } from '../../constants';
import IconInput from './IconInput';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';

export default Header = ({search,inputValue,onChange,onSearch, backIcon, heading=""}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const len = heading.length;

    const renderIcons = () => {
        return headerIcons.map(icon=>
            <Ionicons
                key={icon.id}
                name={icon.name}
                size={22}
                color={colors.text}
                onPress={()=>navigation.navigate('OtherStack',{screen: icon.action})}
                style={{marginLeft:hp('1%')}}
            />
        )
    }
    return(
        <View style={styles.container}>
            {backIcon &&
                <Ionicons
                    name={'arrow-back'}
                    size={22}
                    color={colors.text}
                    onPress={()=>navigation.goBack()}
                    style={{marginRight:hp('1%')}}
                /> 
            }
            
            {search
                ?
                <IconInput
                    icon="search"
                    placeholder="Search your place"
                    value={search}
                    onChange={onChange}
                    iconColor={gray}
                    onSubmitPress={onSearch}
                    // blur={false}
                    keyboard={"default"}
                    style={styles.search}
                    inputStyle={{fontSize:hp('2%')}}
                />
                :
                <Text style={[styles.heading,{color:colors.heading}]}>
                    {len > 22 ? heading.slice(0,22)+"..." : heading}
                </Text>
                
            }
            <View style={{flexDirection:'row', flex:1, justifyContent:'space-between',alignItems:'center', marginLeft:hp('1%'), backgroundColor:'blue'}}>
                {renderIcons()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // justifyContent:'space-between',
        marginVertical:hp('2%'),
        backgroundColor:'red'
    },
    search:{
        elevation:5,
        shadowColor:black,
        shadowOpacity:0.1,
        shadowRadius:6,
        height:hp('5%'),
        flex:2,
        marginTop:0
    },
    heading:{
        fontSize:hp('3%'),
        fontFamily:"Bold",
        color:lightGray
    }
})