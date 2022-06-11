import {useDispatch, useSelector} from "react-redux" ; 
import { addCount } from "../Redux/Counter/action";

export const Counter =()=>{
  
 const dispatch = useDispatch() ; /// this is same dispatch function but it is comming from react-redux ;
 // useDIspatch is the hook its gives same dispatch function of store and only advantage of this is react is know this thing // 
 
 const count = useSelector((store)=>store.count.count) ; 
 
 // it can cantroll the re-rendering , useSelector is the hook to get the data , useSelector does not give you entire store because we do not need other things in counter we only need counter resion for that is re-rendering , so if todos are changing why sholud need to counter re-render , counter is not change only todo is change 
    // it can use to those component which state goes to change
 return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick = {()=>{
                dispatch(addCount(1)) ; 
            }}>ADD 1</button>
        </div>
    )
}