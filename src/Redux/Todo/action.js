// import {ADD_COUNT} from "./actionType";
// import {SUB_COUNT} from   "./actionType"; 

import axios from "axios" ; 
// action type

export const GET_TODO = "GET_TODO" ; 
export const GET_TODO_LOADING = "GET_TODO_LOADING" ; 
export const GET_TODO_ERROR = "GET_TODO_ERROR" ; 

//// action creator
export const getTodo = (todo)=>({type : GET_TODO , payload : todo })
export const getTodoLoading = ()=>({type : GET_TODO_LOADING}) ;  // we have to do this only for network request
export const getTodoError = ()=>({type : GET_TODO_ERROR}) ;   // we have to do this only for network request

export const getTodoData = () => async (dispatch)=>{      // instead of returning type and payload we return a function and that function return another function with aregument dispatch  
                   
    // dispatch(getTodoLoading()) ; 
    // const {data} = await axios.get("http://localhost:8080/todos")
    // dispatch(getTodo(data)) ; 
    
    
    // here action is a function
     dispatch(getTodoLoading())                     // now here making a network request through redux by the help od middlwware
     axios.get("http://localhost:8080/todos").then(({data})=>{
         dispatch(getTodo(data))                     // this will excuted only when data available .. if there is multiple loding there its nit excuted .....
   
    }).catch((err)=>{
       dispatch(getTodoError(err)) ;                  //if type is error then it shows error 
    })
}

///// addTodo is a function that return a object


// const getTodos = ()=>()=>{    ///////// here getTodos is a function that return another function

//  dispatch("Loading") /// if you want to show loading ... here loading is action
//     axios.get("http://localhost:8080/todos").then(({data})=>{
//         dispatch(addTodo(data))  // this will excuted only when data available .. if there is multiple loding there its nit excuted .....
  
//    }).catch(()=>{
//   dispatch("error") ; //if type is error then it shows error 
//    })
// }
