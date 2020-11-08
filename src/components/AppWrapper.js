import '../index.css'
import AppContain from './AppContain'

function App(props) {
  return (
    <div className="appWrapper">
      <AppContain>
      {props.children}
      </AppContain>
    </div>
  );
}

export default App;
