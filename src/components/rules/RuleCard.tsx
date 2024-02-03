import React, { useState } from 'react';

interface RuleCardProps {
  title: string;
  content: string;
}

const RuleCard: React.FC<RuleCardProps> = ({ title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div
      className='bg-gray-900 p-4 rounded mb-4 cursor-pointer shadow-lg transition-all duration-300 ease-in-out' 
      onClick={toggleContentVisibility}
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-bold mb-2'>{title}</h3>
        <button className='text-amber-50'>
          {isContentVisible ? '▲' : '▼'}
        </button>
      </div>
      {isContentVisible && <p>{content}</p>}
    </div>
  );
};

export default RuleCard;
