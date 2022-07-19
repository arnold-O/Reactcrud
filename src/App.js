
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import List from './component/List';

function App() {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [edit, isEditting] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:"", type:""})



  // handle submit functionality
  const handleSubmit = (e)=>{
  
    e.preventDefault()

    if(!name){
      setAlertOn(true, 'please enter values', 'banger')
     
    }
    // else if(name && isEditting){

    // }
    else{

      const newItem = {id:nanoid(), title:name}
      console.log('hello')
      
      setList([...list, newItem])

      setAlertOn(true, 'Item added successfully', 'rainbow')
      setName('')
    }
  }  

    const setAlertOn = (show=false, msg="", type="")=>{

      setAlert({show, msg, type})

    }
const removeItem = (id)=>{

  setList(list.filter((item)=> item.id !== id))
  setAlertOn(true, 'Item removed successfully', 'banger')

}
  return (
    <div className='main-text'>
      <h1>Simple Crud App</h1>
      {alert.show && <Alert {...alert}/>}

      <form onSubmit={handleSubmit} >

        <div >
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='input-text' placeholder='name....' />
     
      
          <button type="submit">Submit</button>
        </div>
      </form>


    <List list={list} removeItem={removeItem}  setAlertOn={setAlertOn}/>
  

    </div>
  );
}

export default App;
