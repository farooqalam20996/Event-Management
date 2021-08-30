import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { gray, lightGray, primary, purple, white } from '../../assets/colors';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import Header from '../../components/common/Header';
import IconInput from '../../components/common/IconInput';

class CreateEvent extends React.Component {
    state={
        selectedCategory:"",
        reservation:"0",
    }
    onCreateEventPress = () => {
        alert('Create Event')
    }
    seatIncrement = () => {
        this.setState({reservation: parseInt(this.state.reservation)+1})
    }
    seatDecrement = () => {
        this.setState({reservation: parseInt(this.state.reservation)-1})
    }
    render(){
        return(
            <Container>
                <Header
                    heading="Create Event"
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <IconInput
                        style={styles.input}
                        placeholder="Event Name"
                        value={this.state.name}
                        onChange={(text)=>this.setState({name:text})}
                        iconColor={gray}
                        onSubmitPress={()=>this.picker.focus()}
                        blur={false}
                    />
                    <View style={[styles.input,styles.picker]}>
                        <Picker
                            ref={input => this.picker = input}
                            style={{width:'100%',height:hp('6%')}}
                            selectedValue={this.state.selectedCategory}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedCategory:itemValue});
                                    this.desc.focus();
                                }
                            }
                        >
                            <Picker.Item label="Select Category" value="Select Category" />
                            <Picker.Item label="Restaurant" value="Restaurant" />
                            <Picker.Item label="Event" value="Event" />
                        </Picker>
                    </View>
                    <TextInput
                        ref={input => this.desc = input}
                        style={[styles.desc]}
                        value={this.state.desc}
                        multiline
                        onChangeText={(text)=>this.setState({desc:text})}
                        placeholder="Enter Description"
                    />
                    <IconInput
                        phone
                        style={styles.input}
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={(text)=>this.setState({phone:text})}
                        iconColor={gray}
                        onSubmitPress={()=>this.address1.focus()}
                        blur={false}
                    />
                    <IconInput
                        style={styles.input}
                        placeholder="Address Line 1"
                        value={this.state.address1}
                        inputRef={input => this.address1 = input}
                        onChange={(text)=>this.setState({address1:text})}
                        iconColor={gray}
                        onSubmitPress={()=>this.address2.focus()}
                        blur={false}
                    />
                    <View style={styles.row}>
                        <IconInput
                            style={[styles.input,{flex:5, marginTop:0}]}
                            placeholder="Address Line 2"
                            value={this.state.address2}
                            onChange={(text)=>this.setState({address2:text})}
                            iconColor={gray}
                            inputRef={input => this.address2 = input}
                            onSubmitPress={()=>this.DD.focus()}
                            blur={false}
                        />
                        <TouchableOpacity style={[styles.btn]}>
                            <Ionicons size={30} color={white} name="location-sharp"/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.heading}>Add Event Date</Text>
                    <View style={[styles.row,{justifyContent:'space-between',alignSelf:'center', marginTop:0}]}>
                        <IconInput
                            style={[styles.input,{width:hp('10%')}]}
                            placeholder="DD"
                            value={this.state.DD}
                            onChange={(text)=>setState({DD:text})}
                            iconColor={gray}
                            inputRef={input => this.DD = input}
                            onSubmitPress={()=>this.MM.focus()}
                            blur={false}
                        />
                        <IconInput
                            style={[styles.input,{width:hp('10%')}]}
                            placeholder="MM"
                            value={this.state.MM}
                            onChange={(text)=>setState({MM:text})}
                            iconColor={gray}
                            inputRef={input => this.MM = input}
                            onSubmitPress={()=>this.YY.focus()}
                            blur={false}
                        />
                        <IconInput
                            style={[styles.input,{width:hp('10%')}]}
                            placeholder="YY"
                            value={this.state.YY}
                            onChange={(text)=>setState({YY:text})}
                            iconColor={gray}
                            inputRef={input => this.YY = input}
                            onSubmitPress={()=>this.reservation.focus()}
                            blur={false}
                        />
                        <Ionicons name="calendar" size={25} style={styles.icon}/>
                    </View>
                    <Text style={styles.heading}>Add Event Reservation</Text>
                    <View style={[styles.row,{justifyContent:'space-between',alignSelf:'center', marginTop:0}]}>
                        <IconInput
                            style={[styles.input,{width:hp('25%')}]}
                            inputStyle={{textAlign:'center'}}
                            placeholder="00"
                            value={this.state.reservation.toString()}
                            onChange={(text)=>this.setState({reservation:text})}
                            iconColor={gray}
                            keyboard="number-pad"
                            inputRef={input => this.reservation = input}
                            blur={false}
                        />
                        <MaterialIcons name="keyboard-arrow-up" size={24} onPress={this.seatIncrement} style={[styles.arrowIcon]}/>
                        <MaterialIcons name="keyboard-arrow-down" size={24} onPress={this.seatDecrement} style={styles.arrowIcon}/>
                    </View>
                    {/* <View style={styles.row}>
                        <Image/>
                    </View> */}
                    <Button
                        text="Create Event"
                        color={purple}
                        style={{marginBottom:hp('5%'), width:'100%'}}
                        textColor={white}
                        onPress={this.onCreateEventPress}
                    />
                </ScrollView>
            </Container>
        )
    }
   
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
    },
    icon:{
        alignSelf:'center',
        marginTop:hp('1.5%'),
        padding:hp('1.25%'),
        backgroundColor:'#ECECEC',
        borderRadius:hp('1%')
    },
    arrowIcon:{
        backgroundColor:'#ECECEC',
        paddingVertical:hp('1%'),
        marginLeft:hp('1%'),
        height:hp('6%'),
        marginTop:hp('2%'),
        borderRadius:hp('0.5%'),
        textAlign:'center',
        flex:1
    }
})
export default CreateEvent;