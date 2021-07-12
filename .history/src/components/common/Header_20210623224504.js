import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, gray } from '../../assets/colors';
import IconInput from './IconInput';

export const Header = ({search,inputValue,onChange,icons}) => {
    
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
                        // onSubmitPress={()=>inputRef.focus()}
                        // blur={false}
                        keyboard={"default"}
                        style={styles.search}
                        inputStyle={{fontSize:hp('2%')}}
                    />

                </View>
                :null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    search:{
        elevation:5,
        shadowColor:black,
        shadowOpacity:0.5,
        shadowRadius:6,
        height:hp('5%')
    }
})