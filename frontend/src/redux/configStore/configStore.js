import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';



const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const configStore = ()=>{
    const store = createStore(reducer, composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
      ));
      sagaMiddleware.run(rootSaga);
    return store;
}


export default configStore;
