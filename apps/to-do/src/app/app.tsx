// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import ToDoList from './Components/ToDoList'

export function App() {
  return (
    <>
      <h1>TO-DO LIST</h1>
      <em>Because you can't remember things on your own.</em>
      <br></br><br></br>
      <ToDoList />
    </>
  );
}

export default App;
