import React from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from '../assets/colors';


const Filter = ({filters}) => {
    return(
        // <ScrollView
        //     horizontal
        //     showsHorizontalScrollIndicator={false}
        // >
        //     {filters.map(filter=>
        //         <View style={styles.card}>
        //             <Text style={styles.text}>{filter.name}</Text>
        //         </View>
        //     )}
        // </ScrollView>
        <FlatList
            style={{height:10, backgroundColor:'red'}}
            contentContainerStyle={{height:10}}
            horizontal
            // showsHorizontalScrollIndicator={false}
            data={filters}
            renderItem={({item})=>
                <View style={styles.card}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            }
        />
    )
}
export default Filter;
const styles = StyleSheet.create({
    card:{
        minWidth:hp('8%'),
        padding:hp('1%'),
        marginRight:hp('1%'),
        alignItems:'center',
        borderRadius:15,
        backgroundColor:primary,
        justifyContent:'center'
    },
    text:{
        color:white,
        fontSize:hp('2%'),
        fontFamily:"Regular"
    }
})