import { useState } from 'react';
import './App.css';
import ToDoLists from './TodoLists';

const App=()=> {
  const [inputList,setInputList]=useState(null);
  const [Items,setItems]=useState([]);
  const itemEvent=(e)=>{
    setInputList(e.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
  });
  setInputList("");
};
const deleteItems=(id)=>{
  console.log("Deleted")
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
        return index!==id;
    })
  })
}
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
          <br/>
          <h1>ToDoList</h1>
          <br/>
         <input type="text" placeholder='Please Add Items' onChange={itemEvent} value={inputList}></input>
               <button onClick={listOfItems}> + </button>
         <ol>
          {/*inputList*/
          Items.map((itemval,index)=>{
           return <ToDoLists key={index} 
           id={index}
           text={itemval}
           onSelect={deleteItems}
           />;
          })
          
          }
         </ol>


      </div>

    </div>
    </>
  );
}

export default App;
