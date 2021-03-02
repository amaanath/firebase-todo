import './App.css';
import {useState, useEffect} from 'react';
import { Button, TextField, List  } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos ').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addNewTodo = (event) => {
    event.preventDefault();
    setTodos([input, ...todos])
    setInput('');
  }

  return (
    <div className="App">
    <h1>React+Firebase To-Do App 🔥</h1> 
    <form>
      <TextField value={input} onChange={event => setInput(event.target.value)} id="filled-basic" label="Todo" variant="filled" />
      <Button disable={!input} type='submit' onClick={addNewTodo} variant="contained" color="primary">Add Todo</Button>
    </form>
      <List>
      {todos.map((value) => { 
        return <Todo todo={value} /> })}
      </List>      
    </div>
  );
}

export default App;
