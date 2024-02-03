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
  <button className="bg-gray-400 p-1 mr-1 rounded-sm text-black text-xs" key={index} type="button" onClick={() => onClick(item.text, item.value, type)}>
      {item.text}
  </button>
);

export default QuickAddBtn;

