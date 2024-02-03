// components/Strikey/StatInput.tsx
import React from 'react';

interface StatInputProps {
  name: string;
  placeholder: string;
}

const StatInput: React.FC<StatInputProps> = ({ name, placeholder }) => (
  <div className="flex flex-col p-5 bg-teal-900 rounded-md w-48 text-center">
    <label className='mb-3' htmlFor={name}>{name.toUpperCase()}</label>
    <input className='bg-teal-800 text-white py-3 text-center' id={name} type="number" min="0" max="100" name={name} placeholder="0" />
  </div>
);

export default StatInput;
