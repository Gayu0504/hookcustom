
import './App.css';
import { useState, useEffect } from "react";


const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

function App() {
  return (
    <div>
      <h1>hooks custom</h1>
      <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
    </div>
  );
}
}
export default App;
