import '../index.css'
import {useDispatch} from 'react-redux'
import {deleteIncome} from '../redux/actions'

function App(props) {
  const dispatch = useDispatch()
  return (
    <div className="expenceItem">
    <div className="expenceItem_text incomeItem_text"><div>{props.data.text}</div>  <div> +{props.data.money}$</div>  </div>
    <div onClick={()=>dispatch(deleteIncome(props.data.id))} className="expenceItem_delete fa fa-trash"></div>
    </div>
  );
}

export default App;
