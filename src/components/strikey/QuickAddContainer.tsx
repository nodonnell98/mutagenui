// components/Strikey/QuickAddContainer.tsx
import React from 'react';
import QuickAddButton from './QuickAddBtn';

interface QuickAddContainerProps {
  items: { text: string; value: number }[];
  type: string;
  quickAdd: (text: string, value: number, type: string) => void;
}

const QuickAddContainer: React.FC<QuickAddContainerProps> = ({ items, type, quickAdd }) => (
  <div className='quick-add'>
          {items.map((item, index) => (
            <QuickAddButton
              key={index}
              index={index}
              item={item}
              type={type}
              onClick={quickAdd}
            />
            ))}
          </div>
);

export default QuickAddContainer;



