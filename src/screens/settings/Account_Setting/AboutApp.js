import React from 'react'
import { 
    Text, 
    View,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black } from '../../../assets/colors';
import { Container } from '../../../components/common/Container';
import SimpleHeader from '../../../components/common/SimpleHeader';
import {useTheme} from "../../../theme/ThemeContext";

export default function AboutApp(){

    const {colors} = useTheme();

        return (
            <Container>
                <SimpleHeader 
                    backIcon={true}
                    heading="About App"
                />
                <View style={styles.main} >
                    <Text style={[styles.Txt, {color:colors.text}]} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, lorem non luctus porttitor, tellus mauris congue ex, vel venenatis nisi magna vitae nibh. Praesent at turpis tristique, tempus sapien id, commodo erat. Pellentesque est ipsum, malesuada nec risus non, vestibulum scelerisque risus. Etiam aliquam porttitor augue vitae maximus. Praesent porta, erat sed porttitor commodo, dolor nulla ullamcorper est, eu laoreet sem elit a risus. Maecenas nulla justo, malesuada sed augue ut, vehicula accumsan sem. Mauris pretium eget diam non scelerisque. Nulla facilisi. Curabitur id ipsum sit amet nibh lacinia ultrices. Praesent pellentesque non lacus id pulvinar. Curabitur facilisis, augue sit amet varius congue, ex neque luctus nibh, ac iaculis eros quam consequat sapien. Phasellus nunc diam, euismod in blandit a, accumsan suscipit libero. Cras at augue in dolor consequat sodales in ut massa. Maecenas lacinia auctor augue, in euismod velit ultrices et.</Text>
                </View>
            </Container>
        )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    Txt:{
        fontSize:hp("1.8%"),
        fontFamily:"Regular",
        textAlign:"justify",
        letterSpacing:1,
        lineHeight:hp("2.3%"),
    }
});