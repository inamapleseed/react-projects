import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const clearItems = (e) => {
    e.preventDefault();
    setList(['']);
  }

  useEffect(()=>{
    if(alert.type === 'add'){
      const timeout = setTimeout(()=>{
        setAlert(false)
      }, 3000) 
      return () => clearTimeout(timeout);
    }
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // 
    } else if (name && isEditing){
      // 
    } else {
      // add to list
      setList([... list, name]);
      setName('');  
      setAlert({show: true, msg: 'added to cart', type: 'add'});
    }
  }
  
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert/>}
    <h3>grocery bud</h3>
    <div className="form-control">
      <input type="text" className='grocery' placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit" className='submit-btn'>
        {isEditing ? 'edit' : 'submit'}
      </button>
    </div>
    </form>
    {list.length > 0 &&
    (<div className="grocery-container">
      <List items={list}/>
      <button className='clear-btn' onClick={(e)=>clearItems}>clear items</button>
    </div>)
    }
  </section>
}

export default App
