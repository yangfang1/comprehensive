import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './modules';
import clientMiddleware from './middleware/clientMiddleware'
// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({ action, result }) {
//     return result.json().then(data => {
//       return Promise.resolve({
//         action,
//         result: data,
//       });
//     });
//   },
// });
const configureStore = function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware( clientMiddleware,thunk, logger));
};
export default configureStore;