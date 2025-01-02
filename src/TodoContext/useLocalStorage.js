import React from "react"

function useLocalStorage(itemName,initialValue){

  const [item,setItem]=React.useState(initialValue);
  const [loading,setLoading]=React.useState(true);
  const [error,setError]=React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItems=localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItems){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue;
        }else{
          parsedItem=JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    },2000);
  });

  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
  //Por convencion de los custom hooks si se regresan mas de dos valores
  //es mejor retornarlos en un objeto en lugar de un arreglo
}

export {useLocalStorage}

// localStorage.removeItem('TODOS_V1');
// const defaultTodos=[
//   {text: "Cortar cebolla",completed: true},
//   {text: "Tomar el curso de introducción a React.js",completed: false},
//   {text: "Llorar con la llorona",completed: false},
//   {text: "Usar estados derivados",completed: true},
//   {text: "LALALALALA",completed: false}
// ]
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));