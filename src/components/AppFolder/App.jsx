import { Title } from '../Title/Title';
import { Todo } from '../Todo/Todo';
import { useState } from 'react';

function App() {

  const [todo,setTodo] = useState([
    {
      id: 1,
      text: "Trenirovka qilish",
      isComplated: false,
    },
    {
      id: 2,
      text: "Ovqatlanish",
      isComplated: false,
    },
    {
      id: 3,
      text: "Code yozish",
      isComplated: false,
    }
  ]);

  const addTodo = (evt) => {
    evt.preventDefault();

    const inputValue = evt.target[0].value;
    evt.target[0].value = "";
    if(inputValue) {
      setTodo([...todo,{
        id: todo.length ? todo.at(-1) + 1 : 1,
        text: inputValue,
        isComplated: false,
      }])
    } else {
      alert("Siz hali ToDo kiritmadingiz !!!");
    }
  };

  // delete func.
  const deleteFunc = (id) => {
    const deleteTodo = todo.findIndex((item) => item.id === id);
    todo.splice(deleteTodo,1);
    setTodo([...todo]);
  };

  // edit func. 
  const editFunc = (id) => {
    let editTodo = todo.find((item) => item.id === id);
    let newTodo = prompt("ToDoni yangilang");
    editTodo.text == editTodo;
    if(newTodo === "") {
      alert("Siz ToDoni yangilamadingiz !!!");
      return;
    } 
    if(newTodo) {
      editTodo.text = newTodo;
    }
    setTodo([...todo]);
  }

  return (
    <>
    <div className='w-screen h-screen bg-gray-400'>
      <Title/>
      <form onSubmit={addTodo}  className="flex items-center justify-center gap-4">
        <input className="w-[380px] px-2 py-3 border-2 rounded-md outline-none font-semibold" type="text" />
        <button className="max-w-[130px] w-full px-2 py-2 font-semibold text-lg border-2 border-black rounded-md bg-slate-600" type="submit">Add a task +</button>
      </form>
      {
        todo.length ? (
          <ul className='flex items-center flex-col gap-2 pt-16'>
          {
            todo.map((item) => <Todo key={item.id} data-id={item.id} text={item.text} deleteFunc={deleteFunc} editFunc={editFunc}/>)
          }
        </ul>
        ) : <h2 className='mt-10 text-3xl font-bold text-center'>Todolar mavjud emas !!!</h2>
      }
    </div>
    </>
  )
}

export default App;
