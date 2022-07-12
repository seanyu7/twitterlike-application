import "./App.css";

function App() {

  const list = [1,2,3,4];
  
  return <div className="App">
    <h1>map-practice</h1>
    {list.map(item => <div>{item *2}</div>)}
    </div>;
}

export default App;
