import React from 'react'
import '../index.css'
import ExpenceItem from './ExpenceItem'
import {useDispatch,useSelector} from 'react-redux'
import { addExpence } from '../redux/actions'


function App() {
  const [text,setText] = React.useState('')
  const [money,setMoney] = React.useState('')
  const expenceTodo = useSelector(state=>state.expence)
  const dispatch = useDispatch()
  const textInput=()=>{
    if(text&&money&&text.length>=3){
    dispatch(addExpence({text:text,money:money}))
    setMoney('')
    setText('')
    }
      }
  return (
    <div className="income expence">
    <input className='income_input' onChange={(e)=>setText(e.target.value)} value={text} placeholder='Add expence...' type="text"/> <br/>
    <input className='income_input' onChange={(e)=>setMoney(e.target.value)} value={money} placeholder='Money' type="number"/>  <br/>
    <button onClick={textInput} className='income_btn expence_btn'>Submit</button> 
  {
expenceTodo.map(item=>(
   <ExpenceItem key={item.id} data={item}/>
  ))
  }
    </div>
  );
}

export default App;
