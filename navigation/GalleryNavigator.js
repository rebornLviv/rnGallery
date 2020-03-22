import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import PhotoOverViewScreen from '../screens/PhotoOverViewScreen';
import PhotoScreen from '../screens/PhotoScreen';

const defaultOptions ={
    headerStyle:{
        backgroundColor: 'black'
    },
    headerTintColor:'yellow'

    
}
const GStackNavigator = createStackNavigator({

PhotoOverView: PhotoOverViewScreen,
Photo: PhotoScreen


},
{
    defaultNavigationOptions:defaultOptions
} )


export default createAppContainer(GStackNavigator)


