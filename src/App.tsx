import React, { useState } from 'react';
import './App.css';

interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string //optional
  }[]
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

  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
    </div>
  );
};

export default App;
