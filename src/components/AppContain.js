import '../index.css'

function App(props) {
  return (
    <div className="appContain">
     {props.children}
    </div>
  );
}

export default App;
