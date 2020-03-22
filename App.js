import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GalleryNavigator from './navigation/GalleryNavigator'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import photosReducer from './store/reducers/photos'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers(
  {
    photos : photosReducer
  
  
  }
)

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
export default function App() {
  return (
    <Provider store={store}>
   <GalleryNavigator/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
