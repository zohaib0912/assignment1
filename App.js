import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [updateIndex, setupdateIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  function itemAdd() {
    const tempList = [...list];
    tempList.push(userInput);
    setList(tempList);
  }

  function deleteItem(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  function editItem(index) {
    setupdateIndex(index);
    setEditText(list[index]);
  }

  function saveEdit(index) {
    const tempList = [...list];
    tempList[index] = editText;
    setList(tempList);
    setupdateIndex(-1);
  }

  function cancelEdit() {
    setupdateIndex(-1);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          placeholder='Enter your item'
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={itemAdd}>Add Item</button>

        <ul>
          {list.map(function (item, index) {
            return (
              <li key={index}>
                {updateIndex === index ? (
                  <>
                    <input
                      type='text'
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(index)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item}
                    <button onClick={() => deleteItem(index)}>Delete it</button>
                    <button onClick={() => editItem(index)}>Update</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
