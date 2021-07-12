import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';


const ReviewCard = (props) => {
    return(
        <View style={styles.container}>
            <View style={[styles.row,{flexDirection:'row'}]}>
                <Text style={styles.heading}>Reviews</Text>
                <View style={styles.row}>
                    <StarRating
                        style={styles.stars}
                        disabled
                        maxStars={5}
                        rating={4.5}
                        starSize={hp('2%')}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    <Text>4.5</Text>
                </View>
            </View>
        </View>
    )
}
export default ReviewCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('2%')
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    heading:{
        color:'#474747',
        fontFamily:'Bold',
        fontSize:hp('2.5%')
    },
    text:{},
    stars:{},
})