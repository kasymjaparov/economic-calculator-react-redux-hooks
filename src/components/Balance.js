import '../index.css'
import { useSelector } from 'react-redux'

function App() {
  const state = useSelector(state => state)
  let sumIncome=0
  let sumExpence=0
  state.income.forEach( (item) =>sumIncome+=+item.money )
  state.expence.forEach( (item) =>sumExpence+=+item.money )
let raznica = sumIncome - sumExpence
  return (
    <div className="balance">
    <div className="balance_bill">Your balance <br/> ${raznica.toFixed(1)}</div>
    <div className="balance_row">
  <div className="balance_row_income">Income <br/> +${sumIncome.toFixed(1)}</div>
      <div className="balance_row_expence">Expence <br/> +${sumExpence.toFixed(1)}</div>
    </div>
    </div>
  );
}

export default App;
