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
            <View>
                <Text>Reviews</Text>
                <StarRating
                    disabled
                    maxStars={5}
                    rating={4.5}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
            </View>
        </View>
    )
}
export default ReviewCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('2%')
    }
})