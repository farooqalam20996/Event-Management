import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from '../../assets/colors';


const Filter = ({filters, navigation}) => {
    return(
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingLeft:hp('4%'),paddingRight:hp('4%')}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {filters.map(filter=>
                    <View key={filter.id} style={styles.card} >
                        <Text style={styles.text} onPress={()=> navigation.navigate("EventsBy_Category",{id:filter.id, name:filter.category_name})} >{filter.category_name}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}
export default Filter;
const styles = StyleSheet.create({
    container:{
        height:hp('4%'),
        marginRight:hp('-4%'),
        marginLeft:hp('-4%'),
        marginTop:hp('1%'),
        marginBottom:hp('1%')
    },
    card:{
        minWidth:hp('8%'),
        padding:hp('1%'),
        paddingHorizontal:hp("1.5%"),
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