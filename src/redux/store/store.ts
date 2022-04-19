import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import { rootReducer } from '../reducer/rootReducer';
import { useDispatch } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export type AppDispatch = typeof store.dispatch // you can use this Dispatch type in your thunks
export const useAppDispatch = () => useDispatch<AppDispatch>() // 

export default store;
