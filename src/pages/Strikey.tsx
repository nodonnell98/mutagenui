// components/Strikey/Strikey.tsx
import React, { useState, useEffect, useCallback } from 'react';
import StatInput from '../components/strikey/StatInput';
import ModifierContainer from '../components/strikey/ModifierContainer';
import { quickAddBonuses, quickAddPenalties } from '../tmp_db/BonusesPens';

interface Modifier {
  name: string;
  value: number;
}

const Strikey = () => {
  const [bonuses, setBonuses] = useState<Modifier[]>([]);
  const [penalties, setPenalties] = useState<Modifier[]>([]);
  const [result, setResult] = useState<string>('Awaiting calculation...');
  const [currentThreshold, setCurrentThreshold] = useState<number>(0);
  const [resultClass, setResultClass] = useState<string>('');


  const updateThreshold = useCallback(() => {
    const statSelection = document.getElementById('statSelection') as HTMLSelectElement | null;
    if (statSelection) {
      const selectedStatIndex = statSelection.selectedIndex;
      const selectedStat = statSelection.options[selectedStatIndex].value;
      const statInput = document.getElementById(selectedStat) as HTMLInputElement;

      const threshold = Number(statInput.value);
      const totalBonus = bonuses.reduce((sum, bonus) => sum + bonus.value, 0);
      const totalPenalty = penalties.reduce((sum, penalty) => sum + penalty.value, 0);

      const finalThreshold = threshold + totalBonus - totalPenalty;
      setCurrentThreshold(finalThreshold);
    }
  }, [bonuses, penalties, setCurrentThreshold]);

  const handleStatChange = () => {
    updateThreshold();
  };

  useEffect(() => {
    updateThreshold();
  } , [bonuses, penalties, updateThreshold]);
  

  const addModifier = (type: string) => {
    const nameInputId = type === 'bonus' ? 'bonusName' : 'penaltyName';
    const valueInputId = type === 'bonus' ? 'bonusValue' : 'penaltyValue';
  
    const nameInput = document.getElementById(nameInputId) as HTMLInputElement | null;
    const valueInput = document.getElementById(valueInputId) as HTMLInputElement | null;
  
    if (nameInput && valueInput) {
      const name = nameInput.value;
      const value = parseFloat(valueInput.value);
  
      if (name && !isNaN(value)) {
        const modifier = { name, value };
        if (type === 'bonus') {
          setBonuses((prevBonuses: Modifier[]) => {
            const newBonuses = [...prevBonuses, modifier];
            updateList('bonusList', newBonuses);
            return newBonuses;
          });
        } else {
          setPenalties((prevPenalties: Modifier[]) => {
            const newPenalties = [...prevPenalties, modifier];
            updateList('penaltyList', newPenalties);
            return newPenalties;
          });
        }
      }
    }
  };
  
  

  const updateList = (listId: string, items: any[]) => {
    var list = document.getElementById(listId) as HTMLUListElement | null;
    list!.innerHTML = "";
    console.log(items)
    items.forEach(function (item, index) {
      var listItem = document.createElement("li");
      listItem.classList.add("text-teal-400", "border-2", "border-teal-400", "p-2", "rounded-md", "flex", "justify-between", "h-fit");
      listItem.textContent = item.name + " - " + item.value;
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.classList.add("ml-3");
      deleteButton.onclick = function () {
        items.splice(index, 1);
        updateList(listId, items);
      };
      listItem.appendChild(deleteButton);
      list!.appendChild(listItem);
    });
  };

  const quickAdd = (name: string, value: number, type: string) => {
    if (type === 'bonus') {
      setBonuses((prevBonuses: Modifier[]) => {
        const newBonuses = [...prevBonuses, {name, value}];
        updateList('bonusList', newBonuses);
        return newBonuses;
      });
    } else {
      setPenalties((prevPenalties: Modifier[]) => {
        const newPenalties = [...prevPenalties, { name, value}];
        updateList('penaltyList', newPenalties);
        return newPenalties;
      });
    }
  };

  const rollD100 = () => {
    const statSelection = document.getElementById('statSelection') as HTMLSelectElement | null;
    if (statSelection) {
      const selectedStatIndex = statSelection.selectedIndex;
      const selectedStat = statSelection.options[selectedStatIndex].value;
      const statInput = document.getElementById(selectedStat) as HTMLInputElement;

      const threshold = Number(statInput.value);

      const totalBonus = bonuses.reduce((sum, bonus) => sum + bonus.value, 0);
      const totalPenalty = penalties.reduce((sum, penalty) => sum + penalty.value, 0);

      const finalThreshold = threshold + totalBonus - totalPenalty;
      const roll = Math.floor(Math.random() * 100) + 1;
      
      setResult(() => {
        let resultMessage;
        let newResultClass = '';
        if (roll <= Math.floor(finalThreshold / 4)) {
          resultMessage = `CRITICAL SUCCESS`;
          newResultClass = 'critical-success';
        } else if (roll <= finalThreshold) {
          resultMessage = `SUCCESS`;
          newResultClass = 'success';
        } else if (roll >= finalThreshold * 2) {
          resultMessage = `CRITICAL FAILURE`;
          newResultClass = 'critical-failure';
        } else {
          resultMessage = `FAILURE`;
          newResultClass = 'failure';
        }
        setResultClass(newResultClass);
        return `${resultMessage}: ${roll}`;
      });
    }
  };

  const stats = ['strength', 'constitution', 'discipline', 'will', 'intelligence', 'sense'];

  return (
    <div className="w-screen sm:items-center flex justify-center flex-col overflow-y-auto sm:h-screen sm:space-y-6 sm:mt-12">
        <h1 className='invisible font-bold sm:visible sm:shown sm:text-5xl'>Strike Assistant Module</h1>
        <div className="flex w-screen flex-wrap pb-2 sm:pb-0 justify-around sm:justify-between w-100 sm:space-x-3 sm:w-auto">
          {stats.map((stat, index) => (
            <StatInput key={index} name={stat} statChange={handleStatChange} />
              ))}
        </div>
      <form id="rollhtmlForm">
      <div className='flex flex-col sm:flex-row sm:space-x-5'>
          <ModifierContainer type='bonus' items={quickAddBonuses} quickAdd={quickAdd} addModifier={addModifier} />
          <ModifierContainer type='penalty' items={quickAddPenalties} quickAdd={quickAdd} addModifier={addModifier} />
        </div>
          
          {/* calculation section for small and larger screens */}
          <div className='hidden sm:flex sm:flex-wrap space-x-3 items-center mt-5'>
            <div className="htmlForm-group rounded-md bg-teal-900 p-3">
              <label htmlFor="statSelection">Select Stat:</label>
              <select className='bg-inherit rounded-md border-2 border-teal-500 p-1 sm:p-2 ml-2 sm:ml-3' id="statSelection" name="statSelection" onChange={handleStatChange}>
                {stats.map((stat, index) => (
                  <option key={index} value={stat.toLowerCase()}>{stat.toUpperCase()}</option>
                ))}
              </select>
            </div>
          <p className='rounded-md bg-teal-900 p-2 sm:p-5'>Success: {currentThreshold} Crit: { Math.floor(currentThreshold / 4)} </p>
            <button className="bg-teal-500 h-full sm:p-5 rounded-md ease-in-out duration-300 hover:scale-105" type="button" onClick={() => rollD100()}>ROLL</button>
          <div className={`bg-teal-950 shadow-inner sm:p-5 grow h-full rounded-md result border-2 border-teal-700 ${resultClass}`} id="result">{result}</div>
          </div>

          {/* calculation section for below small screens */}
          <div className='flex sm:hidden flex-wrap space-x-3 items-center justify-center'>
            <div className="htmlForm-group rounded-md bg-teal-900 p-3">
              <label htmlFor="statSelection">Select Stat:</label>
              <select className='bg-inherit rounded-md border-2 border-teal-500 p-2 ml-3' id="statSelection" name="statSelection" onChange={handleStatChange}>
                {stats.map((stat, index) => (
                  <option key={index} value={stat.toLowerCase()}>{stat.toUpperCase()}</option>
                ))}
              </select>
            </div>
            <button className="bg-teal-500 h-full p-5 rounded-md ease-in-out duration-300" type="button" onClick={() => rollD100()}>ROLL</button>
            <div className='flex py-2'>
          <p className='rounded-md bg-teal-900 p-5 mr-2'>Success: {currentThreshold} Crit: { Math.floor(currentThreshold / 4)} </p>
          <div className={`bg-teal-950 shadow-inner p-5 h-full rounded-md result border-2 border-teal-700 ${resultClass}`} id="result">{result}</div>
          </div>
          </div>
        </form>
    </div>
  );
};

export default Strikey;
