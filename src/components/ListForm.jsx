import React, { useState } from 'react';

export default function ListForm() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setListItems([...listItems, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" className="form-control text-center" placeholder="What do you have to do?" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      <input type="submit" value="Add" class="btn btn-dark w-100 mt-3"/>
      <>{listItems.map((item) => (<li>{item}</li>))}</>
    </form>
  );
};