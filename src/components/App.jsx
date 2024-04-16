import React, {useState} from "react";
import Toditem from "./Toditem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => [...prevItems, inputText]);
    setInputText(""); 
  }
  function deleteItem(id) {
   setItems(prevItems =>{
    return prevItems.filter((items, index) =>{
      return index !== id
    })
   })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
               <Toditem  key={index}  id={index}
               text={todoItem}
                onChecked={deleteItem}
               />

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
