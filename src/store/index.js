import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'user',
    storage: storage,
    whitelist: ['user'] 
  };


  const pReducer = persistReducer(persistConfig, rootReducer);
  const middleware = applyMiddleware(thunkMiddleware);
  const store = createStore(pReducer, middleware);
  const persistor = persistStore(store);
  export { persistor, store };


// const store = () => {
//     return createStore(
//         rootReducer,
//         // persistedReducer,
//         applyMiddleware(thunkMiddleware)
//     )
// };

// export default store;