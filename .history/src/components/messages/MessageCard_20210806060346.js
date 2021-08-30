import React,{useState} from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, lightGray, primary } from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import {useTheme} from '../../theme/ThemeContext'; 
import { manageDate } from '../../utils';
import ImageLoader from '../common/ImageLoader';

const MessageCard = ({side, data}) => {

    const {colors} = useTheme()
    const [Visible , SetVisible] = useState(false);

    const isLeftSide = side === 'left';
    const containerStyles = isLeftSide ? styles.container : flattenedStyles.container;
    const textContainerStyle = isLeftSide ? [styles.textContainer, data.image && {marginRight:"55%"}] : [flattenedStyles.textContainer, data.image && {marginLeft:"55%"}];
    const textStyles = isLeftSide ? flattenedStyles.leftText : flattenedStyles.rightText;

    const ToggleModal=()=>{
        SetVisible(!Visible);
    }
    const getDate = () => {
        const today = manageDate(new Date().getTime());
        const date = manageDate(data.createdAt)
        if(today.split(",")[0] == date.split(",")[0]){
            return date.split(",")[1]
        }
        return date.split(",")[0]
    }
    return(
        <>
            <View style={containerStyles}>
                <Image 
                    source={require('../../assets/images/user.jpg')}
                    style={styles.imageStyle}
                />
                <View style={[textContainerStyle, data.image && {paddingHorizontal:7.25,paddingVertical:7.25}]}>
                    {data.image
                        ?
                        <>
                            <TouchableOpacity onPress={()=> SetVisible(true)} >
                                {/* <Image style={styles.imageStyle} source={{uri: data.image}} /> */}
                                <ImageLoader style={styles.imageStyle} source={{uri: data.image}}/>
                            </TouchableOpacity>
                            {data.text ? <Text style={[textStyles,{marginTop:5}]}>{data.text}</Text> : null }
                        </>
                        :
                        <>
                            <Text style={textStyles}>{data.text}</Text>
                        </>
                    }
                   
                    <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text style={[styles.dateStyle,isLeftSide ? data.type=="sticker" ? {color:'#FFB81A'} :{color:'#FFB81A'} : { color:'#AC7908'}]}>{getDate()}</Text>
                        {!isLeftSide &&
                            (data.seen 
                                ?                                
                                <Ionicons style={{marginLeft:3}} name="md-checkmark-done-sharp" size={14} color={data.type=="sticker"?"#FFB81A":"black"} />
                                :
                                <Ionicons style={{marginLeft:3}} name="md-checkmark-sharp" size={14} color="black"  color={data.type=="sticker"?"#FFB81A":"black"} />
                            )
                        }
                    </View>
                </View>
            </View>
            {/* <Modal 
                visible={Visible} 
                onDismiss={()=> SetVisible(false)} 
                onBackButtonPress={()=>SetVisible(false)}
                transparent 
            >
                <ImageViewer
                    imageUrls={[{url: data.image}]}
                    // onLongPress={()=>SetVisible(true)}
                    renderHeader={()=>
                        <View style={{flexDirection:"row",top:Platform.OS=="ios"?"5%":"0%",width:"100%", position:"absolute", alignItems:"center",zIndex:1 , justifyContent:"space-between"}} >
                            <Text style={{color:"white" , fontSize:18 , fontFamily:"Medium", marginLeft:"3%"}} ></Text>
                            <TouchableOpacity onPress={()=>SetVisible(false)}  >
                                <Feather name="x" size={25} style={{margin:20}} color="white"/>
                            </TouchableOpacity>
                        </View>
                    }
                    enablePreload
                    enableImageZoom
                    onSwipeDown={()=>SetVisible(false)}
                    enableSwipeDown
                    renderIndicator={()=> null}
                />
            </Modal> */}
        </>
    )
}
export default MessageCard;

// const styles = StyleSheet.create({
//     container:{
//         flexDirection:'row',
//         borderTopWidth:1,
//         borderTopColor:lightGray,
//         minHeight:hp('6.5%'),
//         padding:hp('1.5%'),
//     },
// })

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingVertical: 3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:lightGray,
        // minHeight:hp('6.5%'),
        // padding:hp('1.5%'),
    },
    textContainer: {
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginLeft: 10,
        maxWidth:"80%"
    },
    rightContainer: {
        justifyContent: 'flex-end',
    },
    rightTextContainer: {
        marginRight: 10,
    },
    leftText: {
        textAlign: 'left',
        color:black,
    },
    rightText: {
        // textAlign: 'right',
        color:'black',
    },
    imageStyle:{
        height:25,
        width:25,
        borderRadius:10,
        alignItems:'center'
    },
    text: {
        fontSize: 15
    },
    dateStyle:{
        color:primary,
        fontSize:9,
        textAlign:'right',
        marginTop:5,
    }
    
});

const flattenedStyles = {
    container: StyleSheet.flatten([styles.container, styles.rightContainer]),
    textContainer: StyleSheet.flatten([styles.textContainer, styles.rightTextContainer]),
    leftText: StyleSheet.flatten([styles.leftText, styles.text]),
    rightText: StyleSheet.flatten([styles.rightText, styles.text])
}