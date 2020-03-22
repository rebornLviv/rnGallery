import React from 'react';
import {View,StyleSheet,Text, ImageBackground} from 'react-native';
import { useSelector} from 'react-redux';


const PhotoScreen = props => {
const id = props.navigation.getParam('pid')
const photo = useSelector(state => state.photos.photos.find( p =>  p.id === id))
const photoScr =photo.bigUrl;
const author = photo.userDetails;




return ( 
    
    <View>
<ImageBackground
style={styles.image}  
source={{uri:photoScr} } 
resizeMode="cover"

/>
<View style={styles.textContainer}>
<Text style={styles.text}>Photo by :  {author}  </Text>

</View>
</View>


)



}


const styles = StyleSheet.create({

image:{
    width:'100%',
    height:"90%"
},
textContainer:{
    
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:20
}

    
})




export default PhotoScreen;