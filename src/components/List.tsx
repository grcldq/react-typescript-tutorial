import React from 'react';
import { IState as IProps } from '../App';

// can be by interface
// interface IProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

const List = (props: IProps) => {
  const { people } = props;

  // = (): JSX.Element[] =>
  const renderList = () => {
    return people.map((person) => (
      <li className='List'>
        <div className='List-header'>
          <img className='List-img' src={person.url} alt='person-img' />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

// or
/*
const List: React.FC<IProps> = ({ people }) => {
  return <div>I am a list</div>;
};
*/

export default List;
