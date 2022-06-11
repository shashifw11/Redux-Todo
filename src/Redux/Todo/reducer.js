
import { GET_TODO,GET_TODO_LOADING,GET_TODO_ERROR } from "./action";


const initState = {
    todo : [] , 
    loading : false, 
    erroe : false , 
}
export const todoReducer = (store = initState , {type , payload} )=>{
    // console.log("store" , store)
    switch(type){
        case GET_TODO : 
            return {...store , todo : [...payload ] , loading : false}  /// there is no previous todos present because each and every time you r reciving all the todos so you do not need to write ...store.todos
        case GET_TODO_LOADING :
              return { ...store , loading : true}
        case GET_TODO_ERROR :
              return { ...store , error : true} 
        // case SUB_TODO :
        //     return {...store , todo : [...store.todo, payload ]}  /// ...store preserve previous store data , ...store.todo means preserve previous todos data , payload means only add new todo
      
      default : 
         return store ;  
     }
     
}


