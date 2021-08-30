import React from 'react';
import {
    View,
    StyleSheet,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, gray } from '../../assets/colors';
import { headerIcons } from '../../constants';
import IconInput from './IconInput';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';

export default Header = ({search,inputValue,onChange,onSearch}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

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
            <View style={{flexDirection:'row', flex:1, justifyContent:'space-between',alignItems:'center', marginLeft:hp('1%')}}>
                {renderIcons()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:hp('2%'),
    },
    search:{
        elevation:5,
        shadowColor:black,
        shadowOpacity:0.1,
        shadowRadius:6,
        height:hp('5%'),
        flex:2,
        marginTop:0
    }
})