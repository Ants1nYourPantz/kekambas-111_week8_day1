import React, { useState } from 'react';

export default function ListForm() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setListItems([...listItems, inputValue]);
    setInputValue(''); // clear input field
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Add Item</button>
      <ul >
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </form>
  );
};