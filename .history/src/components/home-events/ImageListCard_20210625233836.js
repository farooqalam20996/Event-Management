import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Modal,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImageViewer from 'react-native-image-zoom-viewer'
import { Ionicons as Icon } from '@expo/vector-icons';
import ImageLoader from '../common/ImageLoader';

var urlImages = [];

const ImageListCard = ({images, text}) => {
    useEffect(()=>{
        urlImages=[]
        Object.values(images).map(image=>urlImages.push({url:image}))
    })
    const [imageDisplay,setImageDisplay] = useState({uri:images[1]});
    const [visible,setVisible] = useState(false);
    return(
        // <View style={styles.container}>
        //     <Text style={styles.text}>{props.text}</Text>
        //     <Image style={styles.mainImage} source={props.image}/>
        //     <View style={styles.imageRow}>
        //         <ScrollView  horizontal>
        //             <Image style={styles.image} source={props.image}/>
        //             <Image style={styles.image} source={props.image}/>
        //             <Image style={styles.image} source={props.image}/>
        //             <Image style={styles.image} source={props.image}/>
        //             <Image style={styles.image} source={props.image}/>
        //         </ScrollView>
        //     </View>
        // </View>
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Modal 
                onRequestClose={()=>setVisible(false)}
                visible={visible}
            >
                <ImageViewer 
                    enablePreload
                    enableImageZoom
                    onLongPress={()=>setVisible(false)}
                    renderHeader={()=>
                        <TouchableOpacity style={{top: 0, position: "absolute", zIndex: 9999,alignSelf:'flex-end'}} onPress={()=>setVisible(false)}>
                            <Icon name={"close"} size={35} style={{margin:20}} color="white"/>
                        </TouchableOpacity>
                    }
                    onSwipeDown={()=>setVisible(false)}
                    enableSwipeDown
                    imageUrls={urlImages}
                />
            </Modal>
            {Object.keys(images).length>1
                ?
                <>
                    <TouchableOpacity onPress={()=>setVisible(true)}>
                        <ImageLoader 
                            style={styles.mainImage} 
                            source={imageDisplay}
                            stretch="1"
                        />
                    </TouchableOpacity>
                    <ScrollView style={styles.imageRow} showsHorizontalScrollIndicator={false} horizontal>
                        {
                            Object.values(images).map((image)=>(
                                <TouchableWithoutFeedback key = {image} onPress={()=>setImageDisplay({uri: image,priority:FastImage.priority.high})}>
                                    {/* <View style={styles.container}> */}
                                        <ImageLoader
                                            style={styles.image} 
                                            source={{uri:image}}
                                            stretch="1"
                                        />
                                        
                                    {/* </View> */}
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </ScrollView>
                </>
                :
                <TouchableOpacity onPress={()=>setVisible(true)}>
                    <ImageLoader
                        style={styles.imageDisplay} 
                        source={imageDisplay}
                        stretch="1"
                    />
                </TouchableOpacity>
            }
                    
        </View>
    )
}  
export default ImageListCard;

const styles = StyleSheet.create({
    container:{
        marginTop:hp('1.5%')
    },
    text:{
        marginBottom:hp('1.75%'),
        color:"#A2A2A2"
    },
    imageRow:{
        flexDirection:'row',
        marginTop:hp('1.5%'),
    },
    mainImage:{
        height:hp('25%'),
        width:'100%',
        borderRadius:hp('1%')
    },
    image:{
        height:hp('8%'),
        width:wp('25%'),
        borderRadius:hp('1%'),
        marginRight:hp('1%')
    },


    imageDisplay:{
        height:hp('37%'),
        width:wp('90%'),
        borderRadius:hp('2.5%'),
        marginBottom:hp('3%'),
    },
    
})