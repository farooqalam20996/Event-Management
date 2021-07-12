import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import { yellow } from '../../assets/colors';

const Review = (review) => {
    return(
        <View>
            <View style={styles.row}>
                <Text style={styles.heading}>David Martin</Text>
                <StarRating
                    style={styles.stars}
                    disabled
                    maxStars={5}
                    rating={4}
                    starSize={hp('2.5%')}
                    emptyStarColor={yellow}
                    fullStarColor={yellow}
                    halfStarColor={yellow}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
            </View>
        </View>
    )
}


const ReviewCard = (props) => {

    return(
        <View style={styles.container}>
            <View style={[styles.row,{justifyContent:'space-between'}]}>
                <Text style={styles.heading}>Reviews</Text>
                <View style={styles.row}>
                    <StarRating
                        style={styles.stars}
                        disabled
                        maxStars={5}
                        rating={4.5}
                        starSize={hp('2.5%')}
                        emptyStarColor={yellow}
                        fullStarColor={yellow}
                        halfStarColor={yellow}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    <Text style={[styles.text,{marginLeft:hp('1%')}]}>4.5</Text>
                </View>
            </View>
            <Review/>
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
    text:{
        fontSize:hp('2.2%')
    },
    stars:{},
})