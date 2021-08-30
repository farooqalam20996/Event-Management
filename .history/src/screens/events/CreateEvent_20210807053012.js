import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { gray, lightGray, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import IconInput from '../../components/common/IconInput';
import SimpleHeader from '../../components/common/SimpleHeader';

const CreateEvent = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const onCreateEventPress = () => {
        alert('Create Event')
    }
    return(
        <Container>
            <SimpleHeader
                heading="Create Event"
                icon1={"settings"}
                icon1Press={()=>alert('settings')}
            />
            <IconInput
                phone
                placeholder="Event Name"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <Picker
                style={{width:'100%',height:hp('6%')}}
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCategory(itemValue)
                }
            >
                <Picker.Item label="Select Category" value="Select Category" />
                <Picker.Item label="Restaurant" value="Restaurant" />
                <Picker.Item label="Event" value="Event" />
            </Picker>
            <TextInput
                style={[styles.desc]}
                value={''}
                multiline
                onChangeText={(text)=>setDesc(text)}
                placeholder="Enter Description"
            />
            <IconInput
                phone
                placeholder="Phone Number"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <IconInput
                placeholder="Address Line 2"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <View style={styles.row}>
                <IconInput
                    style={{flex:5}}
                    placeholder="Address Line 1"
                    value={''}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
            </View>
            {/* <View style={styles.row}>
                <Image/>
            </View> */}
            <Button
                text="Create Event"
                color={purple}
                style={{marginBottom:hp('5%')}}
                textColor={white}
                onPress={onCreateEventPress}
            />
            
        </Container>
    )
}
const styles = StyleSheet.create({
    picker:{
       
    },
    desc:{
        height:hp('12%'),
        paddingHorizontal:hp('1%'),
        backgroundColor:lightGray,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'80%'
    },
    btn:{
        backgroundColor:white,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:hp('6.5%'),
        marginLeft:hp('1%')
    }
})
export default CreateEvent;