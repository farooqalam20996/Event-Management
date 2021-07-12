import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, gray } from '../../assets/colors';
import IconInput from './IconInput';
import { Ionicons } from '@expo/vector-icons';

export default Header = ({search,inputValue,onChange,onSearch, icons}) => {

    const renderIcons = () => {
        return icons.map(icon=>
            <Ionicons
                key={icon.id}
                name={icon.name}
                size={22}
                color={darkGray}
                onPress={()=>alert(icon.action)}
                style={{marginLeft:hp('1%')}}
            />
        )
    }
    return(
        <>
            {search
                ?
                <View style={styles.container}>
                    <IconInput
                        icon="search"
                        placeholder="Search your place"
                        value={inputValue}
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
                :null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:hp('2%')
    },
    search:{
        elevation:5,
        shadowColor:black,
        shadowOpacity:0.5,
        shadowRadius:6,
        height:hp('5%'),
        flex:2,
        marginTop:0
    }
})