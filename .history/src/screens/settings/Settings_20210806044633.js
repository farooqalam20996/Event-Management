import React from 'react';
import {
    View,
} from 'react-native';
import { Container } from '../../components/common/Container';
import SimpleHeader from '../../components/common/SimpleHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Row from '../../components/common/Row';
import { useNavigation } from '@react-navigation/native';
import { settingItems } from '../../constants';


const Settings = () => {
    const navigation = useNavigation();
    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Settings"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {settingItems.map(item=>
                <View key={item.id}>
                    <Row 
                        data={item}
                        onPress={()=>navigation.navigate(item.action)}    
                    />
                </View>
            )}
        </Container>
    )
}
export default Settings;