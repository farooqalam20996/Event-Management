import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const Button = ({text, image}) => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)
const BusinessHomeInitial = () => {
    return(
        <View style={styles.container}>
            <View>
                <Ionicons name="md-information-circle" size={40} color="#5EE2FF"/>
                <Text style={styles.heading}>Get started</Text>
                <Text style={styles.heading}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Text>
                <Button
                    text={"Create Event"}
                    image={require('../../assets/images/cups.png')}
                />
                <Button
                    text={"Create Event"}
                    image={require('../../assets/images/briefcase.png')}
                />
            </View>
        </View>

    )
}
export default BusinessHomeInitial;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{

    },
    image:{

    },
    heading:{

    },
    text:{

    }
})