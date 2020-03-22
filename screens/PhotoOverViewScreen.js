import React,{useState} from 'react';
import {View,FlatList,StyleSheet,Text,Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import * as photoActions from '../store/actions/photos'
import MyButton from '../components/MyButton';
import LoadingSpinner from '../components/LoadingSpinner';
const PhotoOverViewScreen = props => {
const dispatch = useDispatch();
const [queryText,setQueryText]  =  useState('');
const [isLoading,setIsLoading] = useState(false);
const photos = useSelector( state => state.photos.photos);


return(
    <View style={styles.screen}> 
<View style={styles.inputContainer} >    
<Text style={styles.text}>Search for images</Text>
<TextInput textAlignVertical="center"  value={queryText} style={styles.input} onChangeText={ text => setQueryText(text) }/>
<View style={styles.buttonContainer}>
<MyButton  onPress={ async ()=> {
  Keyboard.dismiss()
  setIsLoading(true)  
  await dispatch(photoActions.fetchPhotos(queryText))
  setIsLoading(false)
  
}} query={queryText} />
</View>

</View>



{  isLoading ? <LoadingSpinner />  : 

<FlatList style={styles.list}  data={photos}  renderItem={ 
    itemData => {
       return <Card imageSrc={itemData.item.smallUrl}
                    title={itemData.item.description} 
                    author={itemData.item.userDetails}
                    published={itemData.item.published}
                    onPress={ ()=> { 
                         props.navigation.navigate('Photo',{
                            pid: itemData.item.id
                         })
                    } }
                    
       />
    }
}  /> 



}
    </View>
)

}
PhotoOverViewScreen.navigationOptions = {
headerTitle:'Unsplash'

}

const styles = StyleSheet.create({
 screen:{
flex:1,
justifyContent:'center',
alignItems:'center'
 },

inputContainer:{
   height:150,
   width:'70%',
   justifyContent:'center',
   alignItems:'center'  
},
input:{
    borderWidth:1,
    borderColor:'black',
    borderRadius:20,
    marginTop:10,
    width:'100%',
    textAlign:'center' 
},
text:{
    fontSize:20,

},
buttonContainer:{
    marginTop:10,
    
},
button:{
    width:50,
    height:50,
    borderWidth:1,
    borderRadius:10,
    
},
list:{
    width:'85%'
}

})




export default PhotoOverViewScreen;