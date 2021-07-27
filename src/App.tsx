import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string; //optional
  }[];
}

const App = () => {
  // const [number, setNumber] = useState<number | string>(5);
  // const changeNumber = () => {
  //   setNumber("10");
  // };

  // const [people, setPeople] = useState([
  //   {
  //     name: 'LeBron James',
  //     url: '',
  //     age: 36,
  //     note: 'Allergic to staying on the same team.',
  //   },
  //   {
  //     name: 'Kobe Bryant',
  //     url: '',
  //     age: 36,
  //   }
  // ]);

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg',
      age: 36,
      note: 'Allergic to staying on the same team.',
    },
  ]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
