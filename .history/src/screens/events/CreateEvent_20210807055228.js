import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { gray, lightGray, primary, purple, white } from '../../assets/colors';
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
                style={styles.input}
                placeholder="Event Name"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <View style={[styles.input,styles.picker]}>
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
            </View>
            <TextInput
                style={[styles.desc]}
                value={''}
                multiline
                onChangeText={(text)=>setDesc(text)}
                placeholder="Enter Description"
            />
            <IconInput
                phone
                style={styles.input}
                placeholder="Phone Number"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <IconInput
                style={styles.input}
                placeholder="Address Line 1"
                value={''}
                onChange={(text)=>setEmail(text)}
                iconColor={gray}
                onSubmitPress={()=>inputRef.focus()}
                blur={false}
            />
            <View style={styles.row}>
                <IconInput
                    style={[styles.input,{flex:5, marginTop:0}]}
                    placeholder="Address Line 2"
                    value={''}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <TouchableOpacity style={[styles.btn]}>
                    <Ionicons size={30} color={white} name="location-sharp"/>
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Add Event Date</Text>
            <View style={[styles.row,{justifyContent:'space-between'}]}>
                <IconInput
                    style={[styles.input,{width:hp('10%')}]}
                    placeholder="DD"
                    value={''}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <IconInput
                    style={[styles.input,{width:hp('10%')}]}
                    placeholder="MM"
                    value={''}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <IconInput
                    style={[styles.input,{width:hp('10%')}]}
                    placeholder="YY"
                    value={''}
                    onChange={(text)=>setEmail(text)}
                    iconColor={gray}
                    onSubmitPress={()=>inputRef.focus()}
                    blur={false}
                />
                <Ionicons name="calendar" size={25} style={[styles.input,{width:hp('10%')}]}/>
            </View>
            {/* <View style={styles.row}>
                <Image/>
            </View> */}
            <Button
                text="Create Event"
                color={purple}
                style={{marginBottom:hp('5%'), width:'100%'}}
                textColor={white}
                onPress={onCreateEventPress}
            />
            
        </Container>
    )
}
const styles = StyleSheet.create({
    picker:{
        borderRadius:hp('1%')
    },
    input:{
        width:'100%',
        backgroundColor:'#ECECEC',
        marginTop:hp('2%')
    },
    desc:{
        height:hp('12%'),
        paddingHorizontal:hp('1%'),
        marginTop:hp('2%'),
        backgroundColor:'#ECECEC',
        borderRadius:hp('1%')
    },
    row:{
        marginTop:hp('1.5%'),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    btn:{
        backgroundColor:primary,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:hp('6.5%'),
        marginLeft:hp('1%'),
        borderRadius:hp('1%')
    },
    heading:{
        marginTop:hp('2%'),
        fontSize:hp('2%'),
        fontFamily:'Regular'
    }
})
export default CreateEvent;