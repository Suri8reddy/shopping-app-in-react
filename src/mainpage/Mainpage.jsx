import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Mencollections from '../components/Mencollections'
import Ladiescollections from '../components/Ladiescollections'
import Footer from '../components/Footer'
import { useState } from 'react';
import { Gents, Ladies } from '../data'; 

const Mainpage = () => {
    const[GentsFashion, setGentsFashion] = useState(Gents);
    const[ladiesFashion, setladiesFashion] = useState(Ladies);
  return (
    <div>
        <Header />
        <Banner />
        <Mencollections gents={GentsFashion}/>
        <Ladiescollections ladies={ladiesFashion}/>
        <Footer />
    </div>
  )
}

export default Mainpage

// import React, { useState } from 'react';
// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos([...todos, todo]);
//     setTodo('');
//   };
//   const handleDelete = (index) => {
//     setTodos(todos.filter((todo, i) => i !== index));
//   };
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo} 
//             <button onClick={() => handleDelete(index)}>X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoList;

