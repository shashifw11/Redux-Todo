 import {useState,useEffect} from "react" ; 
import { useDispatch, useSelector } from "react-redux";
import { getTodo,getTodoLoading,getTodoError,getTodoData } from "../Redux/Todo/action";
import axios from "axios" ; 

 
 export const Todo = () =>{
    const [text,setText] = useState("") ; 
  
    const {todo , loading , error} = useSelector(store => store.todo)  || []  ; // useSelector decide which components goes to rerender // if we return store only then entire store goes to re-render 



const dispatch = useDispatch() 

  useEffect(()=>{
    getData()
   },[])
  

const getData = ()=>{
  // we gona see the proper use case of middleware
  // here the below code solve by the help of middleware 
     dispatch(getTodoData()) // this function call do all the thing that did by below code  

    //  dispatch(getTodoLoading())
    //  axios.get("http://localhost:8080/todos").then(({data})=>{
    //      dispatch(getTodo(data))  // this will excuted only when data available .. if there is multiple loding there its nit excuted .....
   
    // }).catch((err)=>{
    //    dispatch(getTodoError(err)) ; //if type is error then it shows error 
    // })
 }

 const handleupdate=(id)=>{
    axios.put(`http://localhost:8080/todos/${id}`).then(getData())
}
const handleDelete=(id)=>{
     axios.delete(`http://localhost:8080/todos/${id}`).then(getData())
}

const addTodos = () => {
     if(!text) return ;
    axios.post("http://localhost:8080/todos", {
        title : text , 
        status : false , 

    }).then(()=>getData()) // aftre each and every post of todos getTodos also called and it shows on screen at the same time
}


    return loading ? ("Loading...") : error ? ("Error Occured") : (
        <div>
            <input type = "text" onChange = {(e)=>setText(e.target.value)}/>
           
           <button onClick = {()=>{ 
                getData() ; 
               dispatch(addTodos(text)); 
           }}>ADD Todo</button>
          
           {todo.map((e,i)=>(
           <div key = {i}>{e.title} 
           <button onClick={()=>{handleupdate(e.id)}}>Edit</button>
           <button onClick={()=>{handleDelete(e.id)}}>Delete</button>
           </div>))}
        </div>
    )
 }