import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

  const [searchValue, SetSearchValue] = React.useState('');

  const onSearchValueSearch = (event)=>{
    console.log(event.target.value)
    SetSearchValue(event.target.value)
  }

  return [
    <input className="TodoSearch" placeholder="Cebolla" 
    onChange={onSearchValueSearch}
    value={searchValue}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
