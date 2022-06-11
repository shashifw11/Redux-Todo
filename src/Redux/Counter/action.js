// import {ADD_COUNT} from "./actionType";
// import {SUB_COUNT} from   "./actionType"; 


// action type
export const ADD_COUNT = "ADD_COUNT" ; 
export const SUB_COUNT = "SUB_COUNT" ;  




//// action creator
export const addCount = (payload)=>({type : ADD_COUNT , payload})
  
export const subCount = (payload)=>({type : SUB_COUNT , payload})

