import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

  const onSearchValueSearch = (event)=>{
    console.log(event.target.value)
  }

  return (
    <input className="TodoSearch" placeholder="Cebolla" 
    onChange={onSearchValueSearch}
    />
  );
}

export { TodoSearch };
