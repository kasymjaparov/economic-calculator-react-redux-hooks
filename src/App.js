import './index.css'
import AppWrapper from './components/AppWrapper'
import Balance from './components/Balance'
import Income from './components/Income'
import Expenses from './components/Expenses'


function App() {
  return (
    <div className="app">
    <AppWrapper>
      <div className='app_title'>BUDGET APP</div>
      <div className="app_row">
<Income/>
<Expenses/>
<Balance/>
      </div>
    </AppWrapper>
    </div>
  );
}

export default App;
