
import './App.css';
import List from './component/List';

function App() {
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='main-text'>
      <h1>Simple Crud App</h1>

      <form onSubmit={handleSubmit} >

        <div >
          <input type="text" className='input-text' placeholder='name....' />
     
      
          <button type="submit"> Submit</button>
        </div>
      </form>

    <List/>
    </div>
  );
}

export default App;
