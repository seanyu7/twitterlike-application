import "./App.css";

function App() {

  const list = [1,2,3,4];
  
  return <div className="App">
    <h1>三項演算子</h1>
    {false ? <h1>true</h1>:<h1>false</h1>}
    </div>;
}

export default App;
