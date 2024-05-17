
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {

  const response = [
    {
      ItemName :"Nirma",
      Itemday :"20",
      ItemMonth : "May",
      ItemYear :"2001"

    },
    {
      ItemName :"Rin",
      Itemday :"06",
      ItemMonth : "january",
      ItemYear :"1995"
    },
    {
      ItemName :"Wheel",
      Itemday :"30",
      ItemMonth : "August",
      ItemYear :"2010"
    }
  ]
  return (
    <div>
      <Item name = {response[0].ItemName}></Item>
      <ItemDate day = {response[0].Itemday} month = {response[0].ItemMonth } year = {response[0].ItemYear}></ItemDate>

      <Item name = {response[1].ItemName}></Item>
      <ItemDate day = {response[1].Itemday} month = {response[1].ItemMonth } year = {response[1].ItemYear}></ItemDate>

      <Item name = {response[2].ItemName}></Item>
      <ItemDate day = {response[2].Itemday} month = {response[2].ItemMonth } year = {response[2].ItemYear}></ItemDate>
      <div className="App">
      <h1>Learn React</h1></div>

    </div>
  );
}

export default App;
