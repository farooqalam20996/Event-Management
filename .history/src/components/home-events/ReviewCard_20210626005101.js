import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import StarRating from 'react-native-star-rating';


const ReviewCard = (props) => {
    return(
        <View>
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

    }
})