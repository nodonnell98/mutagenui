// components/Strikey/StatInput.tsx
import React from 'react';

interface StatInputProps {
  name: string;
  statChange: () => void;
}

const StatInput: React.FC<StatInputProps> = ({ name, statChange }) => (
  <div className="flex flex-col p-2 bg-teal-900 rounded-md w-36 text-center">
    <label className='mb-3' htmlFor={name}>{name.toUpperCase()}</label>
    <input className='bg-teal-800 text-white py-3 text-center' id={name} type="number" min="0" max="100" name={name} placeholder="0" onInput={statChange} />
  </div>
);

export default StatInput;

