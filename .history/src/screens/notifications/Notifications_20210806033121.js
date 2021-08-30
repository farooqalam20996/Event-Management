import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, gray } from '../../assets/colors';
import { Container } from '../../components/common/Container';
import IconInput from '../../components/common/IconInput';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';

const notifications = [
    {
        id:1,
        text:"Sant Martin has 15% Discount available",
    },
    {
        id:2,
        text:"Rave Party near your location",
    },
    {
        id:3,
        text:"Sant Martin has 15% Discount available",
    },
    {
        id:4,
        text:"Rave Party near your location",
    },
    {
        id:5,
        text:"Sant Martin has 15% Discount available",
    },
    
   
]

const Notifications = () => {

    const [searchVal, setSearchVal] = useState('');

    const onSearch = () => {
        alert(searchVal)
    }
    return(
       <Container>
            <SimpleHeader
                heading={"Notifications"}
            />
            <IconInput
                icon="search"
                placeholder="Search Notifications"
                value={searchVal}
                onChange={(text)=>setSearchVal(text)}
                iconColor={gray}
                onSubmitPress={onSearch}
                keyboard={"default"}
                style={styles.search}
                inputStyle={{fontSize:hp('2%')}}
            />
            <View style={{marginTop:hp('2%')}}/>
            <ScrollView>
                {notifications.map(item=>
                    <View key={item.id}>
                        <Row 
                            icon={'arrow-right'}
                            data={item}
                            onPress={()=>alert(item.text)}  
                        />
                    </View>
                )}
            </ScrollView>

       </Container>
    )
}
export default Notifications;

const styles = StyleSheet.create({
    search:{
        elevation:5,
        shadowColor:black,
        shadowOpacity:0.1,
        shadowRadius:6,
        height:hp('5%'),
        width:'100%',
        marginTop:hp('1%')
    }
})