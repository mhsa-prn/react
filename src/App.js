import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Card2 from "./Card";

function App() {
  return (
    <div className="App">
      <Card2 title="title1" body="this is 1"/>
      <Card2 title="title2" body="this is 2"/>
      <Card2 title="title3" body="this is 3"/>
    </div>
  );
}

export default App;
