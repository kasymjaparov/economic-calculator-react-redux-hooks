import React from 'react'
import '../index.css'
import {useDispatch,useSelector} from 'react-redux'
import { addIncome } from '../redux/actions'
import IncomeItem from './IncomeItem'


function App() {
  const [text,setText] = React.useState('')
  const [money,setMoney] = React.useState('')
  const incomeTodo = useSelector(state=>state.income)
  const dispatch = useDispatch()
  const textInput=()=>{
if(text&&money&&text.length>=3){
dispatch(addIncome({text:text,money:money}))
setMoney('')
setText('')
}
  }
  return (
    <div className="income">
    <input className='income_input' onChange={(e)=>setText(e.target.value)} value={text} placeholder='Add expence...' type="text"/> <br/>
    <input className='income_input' onChange={(e)=>setMoney(e.target.value)} value={money} placeholder='Money' type="number"/>  <br/>
    <button onClick={textInput} className='income_btn'>Submit</button> 
  {
incomeTodo.map(item=>(
   <IncomeItem key={item.id} data={item}/>
  ))
  }
    </div>
  );
}

export default App;
