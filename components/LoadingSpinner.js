import React from 'react';
import { ActivityIndicator,View,StyleSheet } from 'react-native';



const LoadingSpinner = props => {

    return(
        <View style={styles.screen} ><ActivityIndicator size="large" color="black" /></View>
    )
}

 const styles = StyleSheet.create({
     screen:{
         flex:1,
         justifyContent:'center',
         alignItems:"center"
     }
 })
export default LoadingSpinner;
