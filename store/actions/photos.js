import Photo from "../../models/photo";
export const SET_PHOTOS  = 'SET_PHOTOS';

export const  fetchPhotos = (queryParam) => {

   return async dispatch => {
        try{
            const response = await  fetch(`https://api.unsplash.com/search/photos?query=${queryParam}&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`,
            {
               method:'GET',
            });
            if(!response.ok){
                console.log('not ok')
             throw new Error('something went wrong');     
            }
    const resData = await response.json();
    const loadedPhotos = [];

    for ( const key in resData.results ) {

        loadedPhotos.push(new Photo(resData.results[key].id,
           resData.results[key].created_at,
            resData.results[key].alt_description,
            resData.results[key].urls.small,
            resData.results[key].urls.regular,
            resData.results[key].user.name
        ))
    }
     dispatch({
         type: SET_PHOTOS,
         photos:loadedPhotos,
   
     })
        }
        catch (error){
          throw error;  
        }
       


    }

}

