// components/Strikey/Strikey.tsx
import React, { useState } from 'react';
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
  const [result, setResult] = useState<string>('');

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
      listItem.classList.add("text-teal-400", "mb-3", "border-2", "border-teal-400", "p-2", "rounded-md", "flex", "justify-between");
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
      const resultDiv = document.getElementById('result');

      const threshold = Number(statInput.value);

      const totalBonus = bonuses.reduce((sum, bonus) => sum + bonus.value, 0);
      console.log(bonuses)
      const totalPenalty = penalties.reduce((sum, penalty) => sum + penalty.value, 0);

      const finalThreshold = threshold + totalBonus - totalPenalty;
      const roll = Math.floor(Math.random() * 100) + 1;
      
      resultDiv!.textContent =
          "Threshold: " + finalThreshold + " (Crit: " + Math.floor(finalThreshold / 4)+") " + "Roll: " + roll;
      
      setResult(
        `Threshold: ${finalThreshold} (Crit: ${Math.floor(finalThreshold / 4)}) Roll: ${roll}`
      );

      if (roll <= Math.floor(finalThreshold / 4)) {
        setResult((prevResult) => `${prevResult} (Crit)`);
      } else if (roll <= finalThreshold) {
        setResult((prevResult) => `${prevResult} (Success)`);
      } else {
        setResult((prevResult) => `${prevResult} (Failure)`);
      }
    }
  };

  const stats = ['strength', 'constitution', 'discipline', 'will', 'intelligence', 'sense'];

  return (
    <div className="w-screen h-screen items-center flex justify-center flex-col space-y-12">
        <h1 className='text-5xl font-bold'>Srike Assistant Module</h1>
          <div className="flex justify-between w-100 space-x-3">
            {stats.map((stat, index) => (
              <StatInput key={index} name={stat} placeholder={stat.toUpperCase()} />
            ))}
          </div>
      <form id="rollhtmlForm">
        <div className='flex space-x-5'>
          <ModifierContainer type='bonus' items={quickAddBonuses} quickAdd={quickAdd} addModifier={addModifier} />
          <ModifierContainer type='penalty' items={quickAddPenalties} quickAdd={quickAdd} addModifier={addModifier} />
        </div>
          <div className="htmlForm-group">
            <label htmlFor="statSelection">Select Stat htmlFor Threshold:</label>
            <select id="statSelection" name="statSelection">
              {stats.map((stat, index) => (
                <option key={index} value={stat.toLowerCase()}>{stat}</option>
              ))}
            </select>
          </div>
          <button type="button" onClick={() => rollD100()}>Roll d100</button>
        </form>
        <div id="result" className="result"></div>
    </div>
  );
};

export default Strikey;
