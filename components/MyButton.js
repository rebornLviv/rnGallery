import React from 'react';
import {TouchableOpacity,View,StyleSheet,Text} from 'react-native'



const MyButton = props => {


    return(
        <TouchableOpacity  onPress={props.onPress} disabled={!props.query}>
        <View style={styles.button}> 
            <Text style={styles.text}>GO</Text>
        </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
text:{
    color:'black',
    textAlign:'center'
},
button:{
    
    borderWidth:1,
    borderColor:'gray',
    borderRadius:15,
    backgroundColor:'yellow',
    width:40,
    height:30,
    alignItems:'center',
    justifyContent:'center'
}



})


export default MyButton;