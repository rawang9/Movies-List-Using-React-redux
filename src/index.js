import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
// import reportWebVitals from './reportWebVitals';
// let logger= function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("Action type -> ",action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch,getState}) => (next)=>(action)=>{
  if(typeof action!=='function'){
  console.log("Action type -> ",action.type);}
  next(action);
}
// const thunk = ({dispatch,getState}) => (next)=>(action)=>{
//   if(typeof action==='function'){action(dispatch); return;}
//   next(action);
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log("before ",store.getState());
// store.dispatch({type:"ADD_MOVIES",movies:[{name:"Superman"}]});
// console.log("After ",store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
