import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}){
    return(
      <button className="CreateTodoButton" onClick={()=>{ 
      // onClick={(event)=>{
        // console.log("Le diste click");
        // console.log(event);
        // console.log(event.target);
        setOpenModal(state => !state);
      }}>+</button>
    );  
  }


export {CreateTodoButton};