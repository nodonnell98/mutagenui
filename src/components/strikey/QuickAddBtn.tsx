// components/Strikey/QuickAddBtn.tsx
import React from 'react';

interface QuickAddBtnProps {
  item: {
    text: string;
    value: number;
  },
  type: string;
  index: number;
  onClick: (text: string, value: number, type: string) => void;
}

const QuickAddBtn: React.FC<QuickAddBtnProps> = ({ item, type, index, onClick }) => (
  <button className="bg-teal-800 border-2 border-teal-500 text-teal-500 font-bold p-1 mr-2 mb-2 rounded-sm text-sm ease-in-out duration-300 hover:scale-105" key={index} type="button" onClick={() => onClick(item.text, item.value, type)}>
      {item.text}
  </button>
);

export default QuickAddBtn;

