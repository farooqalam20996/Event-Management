import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { gray } from '../../assets/colors';
import IconInput from './IconInput';

export const Header = ({search,inputValue,onChange,icons}) => {
    
    return(
        <View>
            {search
                &&
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
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        borderWidth:2,
    }
})