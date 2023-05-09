import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const click = (msg) => {
    alert(msg)
  };

  return (
    <button 
    className="CreateTodoButton"
    onClick={()=>click('Aqui debería ir un modal')}> 
      +
    </button>
      
  );
}

export { CreateTodoButton };
