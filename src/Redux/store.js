import {createStore , combineReducers , applyMiddleware ,compose} from "redux" ; 

import { counterReducer  } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";
import thunk from "redux-thunk" ;   // npm i redux-thunk

const rootReducer = combineReducers({
    count : counterReducer  , 
    todo : todoReducer , 
}) ; 

const loggerMiddleware1 = (store) =>(next) =>(action)=>{
 console.log("action"  ,  action)
  if(typeof action === "function"){
      return action(store.dispatch) ; 
  }
       next(action) ;    //////// next means next middleware , there is several middleware excute in between dispatch and store / 
                         // next always pass action to its next middleware ... if there is no middleware than it pass action to store or reducer 
     //  console.log("Exiting MD1")
} 


const loggerMiddleware2 = (store) =>(next) =>(action)=>{  // another middleware
   // console.log("Entering MW2")
       next(action) ; // go to next middleware at this point  
        
       //   console.log("Exiting MD2") 
   } 
   
 // Note - action is passes through all middleware . 

// const loggerMiddleware = function(store){
//     return function(next){
//         return function(action){

//         }
//     }
// }


//const init = {count : 0}

export const store = createStore( 
    rootReducer , 
    compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
      // compose is a hook that combine multiple function in place
     //applyMiddleware(loggerMiddleware1,loggerMiddleware2) // second argumnet is something call store inhancer and middleware is NOT INHANCER but something is give to middleware to create inhancer  , inhancer means something that is add more functionality .
    
     /// loggermiddleware is middleware and it is not inhancer 
    // but applyMiddleware is return inhancer and applyMiddleware is function that return middleware
    // middleaware always excuted after dispatch and before store or reducer
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
) ; 

 
 
    // here the second rgument is devTools and it is for knowing which action is what state or which action is dispatch also helping dispatch action in outside of application so basically it is knowing for our application is what point 
//store.dispatch(Add_Count(1));


//  why we use redux instead of context api // 

// 1) performance 
// 2) single source of Truth  // every thing is store in one place 
// 3) context api is not state management .. but it is  gobal 
// 4) Immuatable behaviour of redux means redux store are not change means i am inteiarly create new store again and again 
// 5)  