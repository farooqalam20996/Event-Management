import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
 import {Container} from "../../../components/common/Container";
 import SimpleHeader from "../../../components/common/SimpleHeader";
 import Row from "../../../components/common/Row";
 import {AccountSettingItems} from "../../../constants/index";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const Account_Setting = ({navigation}) => {
    const userType = useSelector(state => state.LoginReducer.User.type);
    console.log(userType)
    const getRows = () => {
        return AccountSettingItems.map(item=>(
            userType=="individual" && item.text == "Edit Business"
                ?null
                :
                userType=="company"  && item.text == "Edit Account"
                    ?null
                    :
                    <View key={item.id}>
                        <Row 
                            text={item.text}
                            onPress={()=>navigation.navigate(item.action)}    
                        />
                    </View>
        )
            
        )
    }
    return (    
        <Container>
            <SimpleHeader
                backIcon
                heading={"Account Setting"}
            />
            <View style={{marginTop:hp('3%')}}/>
            {getRows()}

        </Container>
    );
}
export default Account_Setting;
