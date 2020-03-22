import { SET_PHOTOS} from "../actions/photos";

const initialState  = {

    photos:[],

}


export default (state = initialState,action) => {
switch(action.type){
    case SET_PHOTOS:
        return {
            photos:action.photos,
        
        }   
    default:
        return state;
}

}