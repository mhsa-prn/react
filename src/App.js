import logo from './logo.svg';
import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card title="title1" body="this is 1"/>
      <Card title="title2" body="this is 2"/>
      <Card title="title3" body="this is 3"/>
    </div>
  );
}

export default App;
