import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';
import { categories } from '../../constants';

const Categories = () => {
    return(
       <Container>
            <SimpleHeader
                heading={"Categories"}
            />
            {/* <View style={{marginTop:hp('3%')}}/> */}
            {categories.map(item=>
                <View key={item.id}>
                    <Row 
                        data={item}
                        onPress={()=>alert(item.text)}  
                    />
                </View>
            )}
       </Container>
    )
}
export default Categories;
