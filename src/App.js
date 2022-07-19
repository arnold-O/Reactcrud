
import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import List from './component/List';

function App() {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState({show:false, msg:"", type:""})



  // handle submit functionality
  const handleSubmit = (e)=>{
  
    e.preventDefault()

    if(!name){
      setAlertOn(true, 'please enter values', 'banger')
     


    }
  }  

    const setAlertOn = (show=false, msg="", type="")=>{

      setAlert({show, msg, type})

    }

  return (
    <div className='main-text'>
      <h1>Simple Crud App</h1>
      {alert.show && <Alert {...alert}/>}

      <form onSubmit={handleSubmit} >

        <div >
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='input-text' placeholder='name....' />
     
      
          <button type="submit"> Submit</button>
        </div>
      </form>

    <List/>
    </div>
  );
}

export default App;
