import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  const onCompleted  = ()=>{
    alert('Ya completaste el todo ' + props.text)
  }

  const onDeleted  = ()=>{
    alert('Borraste el todo ' + props.text)
  }

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onCompleted}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDeleted}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
