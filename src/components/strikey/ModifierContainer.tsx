// components/Strikey/ModifierContainer.tsx
import React from 'react';
import QuickAddContainer from './QuickAddContainer';

interface ModifierContainerProps {
  items: { text: string; value: number }[];
  quickAdd: (text: string, value: number, type: string) => void;
  addModifier: (type: string) => void;
  type: string;
}

const ModifierContainer: React.FC<ModifierContainerProps> = ({ type, items, quickAdd, addModifier }) => (
  
  <div className="htmlForm-group bg-teal-900 p-5 flex flex-col space-y-5 rounded-md w-1/2">
    <label className="text-2xl font-bold" htmlFor={type === 'penalty' ? 'penalties' : 'bonuses'}>{type === 'penalty' ? 'Penalties' : 'Bonuses'}</label>
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="flex space-x-3 w-full">
        <input className='py-2 bg-teal-800 rounded-md border-2 border-teal-500 text-center grow' type="text" id={type === 'penalty' ? 'penaltyName' : 'bonusName'} placeholder={type === 'penalty' ? 'Penalty Name' : 'Bonus Name'} />
        <input className='py-2 bg-teal-800 rounded-md border-2 border-teal-500 text-center grow' type="number" id={type === 'penalty' ? 'penaltyValue' : 'bonusValue'} placeholder={type === 'penalty' ? 'Penalty Value' : 'Bonus Value'} />
      </div>
      <button className="py-1 bg-teal-500 rounded-md w-full" type="button" onClick={() => addModifier(type)}>{type === 'penalty' ? 'Add Penalty' : 'Add Bonus'}</button>
    </div>
    <QuickAddContainer items={items} type={type} quickAdd={quickAdd} />
    <ul className="bg-teal-950 shadow-inner p-5 w-full flex flex-col" id={type === 'penalty' ? 'penaltyList' : 'bonusList'}></ul>
    <p>{ type} Total:</p>
  </div>
);


export default ModifierContainer;



