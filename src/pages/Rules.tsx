// Rules.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ruleSections from '../tmp_db/RuleSections';
import RuleCard from '../components/rules/RuleCard';

const Rules = () => {
  const [searchTerm, setSearchTerm] = useState('');


  // Filter rule sections and cards based on search term
  const filteredSections = ruleSections
  .filter(section => {
    const hasMatchingCards = section.cards.some(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return hasMatchingCards;
  })
  .map(section => {
    const filteredCards = section.cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...section, cards: filteredCards };
  });

  return (
    <div className='flex h-screen pt-24 relative'>
      {/* Sidebar */}
      <div className='w-1/4 p-4 bg-gray-900 sticky left-0 top-0'>
        <h2 className='text-xl font-bold mb-4'>Rule Headings</h2>
        <input
          type='text'
          placeholder='Search Rules'
          className='border p-2 mb-4 w-full text-black'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredSections.map((section, index) => (
            <li key={index} className='mb-2'>
              <Link to={`/rules/${section.title.toLowerCase()}`}>
                {section.title}
              </Link>
              {section.cards.length > 0 && (
                <ul>
                  {section.cards.map((card, cardIndex) => (
                    <li key={cardIndex} className='ml-4'>
                      <Link to={`/rules/${section.title.toLowerCase()}/${card.title.toLowerCase()}`}>
                        {card.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-4 overflow-y-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {filteredSections.map((section, index) => (
            <div key={index}>
              <h2 className='text-xl font-bold mb-4'>{section.title}</h2>
              {section.cards.map((card, cardIndex) => (
                <RuleCard key={cardIndex} title={card.title} content={card.content} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
