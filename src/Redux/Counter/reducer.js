import { ADD_COUNT } from "./action"; 
import { SUB_COUNT } from "./action";


const initState = {
     count : 0 , 
    // count : localStorage.getItem("counter") || 0 , 
   
}
export const counterReducer = (store = initState , {type , payload} )=>{
   //  console.log("store" , store)
    switch(type){
        case ADD_COUNT :
            //  localStorage.setIteam("counter", store.count + payload) ; 
             return {...store , count : store.count + payload} ; 

        case SUB_COUNT :
            return {...store , count : store.count - payload} ;  
      default : 
         return store ; 
     }
     
}