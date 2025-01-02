import React from 'react';
import { useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}){
     
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  }=useLocalStorage("TODOS_V1",[]);
  const [searchValue,setSearchValue]=React.useState("");
  const [openModal,setOpenModal]=React.useState(false);
  const completedTodos=todos.filter(todo=>
    !!todo.completed).length;
  const TotalTodos=todos.length;

//   console.log("Log 1");
  
  // React.useEffect(()=>{
  //   console.log("Log 2");
  // });
  //Sale despues de log 1 y 3 al recargar la pagina
  //o existir cambio de estado de un componente

  // React.useEffect(()=>{
  //   console.log("Log 2");
  // },[]);
  //Sale despues de log 1 y 3 al recargar la pagina, 
  //y no volvera a mostrarse aunque se recargue la pagina
  
//   React.useEffect(()=>{
//     console.log("Log 2");
//   },[TotalTodos]);
  //Sale despues de log 1 y 3 al recargar la pagina, 
  //pero deja de mostrarse a menos que exista un cambio de estado en el componente TotalTodos 
  
//   console.log("Log 3");

  const searchedTodos=todos.filter((todo)=>{
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
    //return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  }
  );

  const completeTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>
      todo.text===text
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>
      todo.text===text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  const addTodo=(text)=>{
    const newTodos=[...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            TotalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

{/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */}

export {TodoContext, TodoProvider};