import React, { useState } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Entypo, Ionicons} from "@expo/vector-icons";
import { primary, white } from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Filter({check_Today,  check_week, check_Top, check_UpComing, isEvent}) {
    const [Today, setToday]=useState(check_Today);
    const [week, setWeek]=useState(check_week);
    const [Top, setTop]=useState(check_Top);
    const [UpComing, setUpComing]=useState(check_UpComing);

    return (
       <>
            <Text style={styles.HeadingTxt} >Search {isEvent?"Event":"Business"}</Text>
            <View style={styles.Top} >
                <ChipComp 
                    name={"UpComing"}
                    Onpress={()=> setUpComing(!UpComing)}
                    ifCheck={UpComing}
                />
                <ChipComp 
                    name={"Top"}
                    Onpress={()=> setTop(!Top)}
                    ifCheck={Top}
                />
            </View>

            <View style={styles.Top} >
                <ChipComp 
                    name={"Today"}
                    Onpress={()=> setToday(!Today)}
                    ifCheck={Today}
                />
                <ChipComp 
                    name={"Weekly"}
                    Onpress={()=> setWeek(!week)}
                    ifCheck={week}
                />
            </View>
       </>
    )
}

function ChipComp({Onpress, name, ifCheck}) {
    return(
        <TouchableOpacity style={ifCheck?styles.Check_btn:styles.btn} onPress={Onpress} >
            <Text style={[styles.Txt, {color:ifCheck?white:primary}]} >{name}</Text>
            {
                !ifCheck?
                <Entypo name="plus" color={primary} size={hp("3.5%")} />
                :
                <Ionicons name="checkmark-sharp" color={white} size={hp("3.5%")} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        // flex:1,
        minWidth:"40%",
        maxWidth:"50%",
        height:hp("5%"),
        borderRadius:hp("2%"),
        backgroundColor:white,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        paddingHorizontal:hp("0.5%"),
        borderColor:primary,
        borderWidth:hp("0.2%")
    },
    Check_btn:{
        minWidth:"40%",
        maxWidth:"50%",
        height:hp("5%"),
        borderRadius:hp("2%"),
        backgroundColor:primary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:hp("0.5%"),
        marginRight:hp("1%")
    },
    Txt:{
        fontFamily:"Bold",
        fontSize:hp("2%")
    },
    Top:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between", 
        width:"100%",
        padding:hp("2%"),
        marginTop:hp("2%")
    },
    HeadingTxt:{
        fontFamily:"Bold",
        alignSelf:"flex-start",
        fontSize:hp("2.8%"),
        color:primary,
        marginTop:hp("2%")
    }
});