import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';

function AppUI(
  // {
    // loading={},
    // error={},
    // completedTodos,
    // TotalTodos,
    // searchValue,
    // setSearchValue,
    // searchedTodos,
    // completeTodo,
    // deleteTodo
  // }
  ){
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);
return (
    // <React.Fragment>
    <>
      <TodoCounter
        // completed={completedTodos}
        // total={TotalTodos}
      />
      <TodoSearch
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />

      {/* <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList> */}

      {/* <TodoContext.Consumer>
        {()=>( */}
          <TodoList>
            {loading && (
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
              )
            }
            {error && <TodosError/>}
            {(!loading && searchedTodos.length===0) && <EmptyTodos/>}

            {searchedTodos.map(todo=>(
              //return( 
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
              />
              //);
            ))}
          </TodoList>
        {/* )}
      </TodoContext.Consumer> */}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      </>
    // </React.Fragment>
  );
}

export {AppUI}