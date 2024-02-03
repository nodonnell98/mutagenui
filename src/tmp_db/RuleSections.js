const ruleSections = [
  {
    title: 'Dice System',
    content: 'Rules for the dice system go here.',
    cards: [
      { title: 'd100 system', content: 'Roll d100' }
    ],
  },
  {
    title: 'Character',
    content: 'Rules for characters go here.',
    cards: [
      { title: 'Attributes', content: 'Rules for attributes go here.' },
      { title: 'Strength', content: 'Rules for attributes go here.' },
      { title: 'Discipline', content: 'Rules for attributes go here.' },
      { title: 'Constitution', content: 'Rules for attributes go here.' },
      { title: 'Will', content: 'Rules for attributes go here.' },
    ],
  },
  {
    title: 'Combat',
    content: 'Rules for combat go here.',
    cards: [
      { title: 'Cover', content: 'Rules for cover go here.' },
      { title: 'Strike', content: 'Rules for strike go here.' },
      { title: 'Aim', content: 'Rules for aim go here.' },
      { title: 'Unabalanced X', content: 'Gain a +5 Strike against an Unbalanced target per stack. Once a target reaches Unbalanced 3 they are prone' },
    ],
  },
  {
    title: 'Mutations',
    content: 'Rules for mutations go here.',
    cards: [
      { title: 'Gene Pool', content: 'Rules for gene pool go here.' }
    ],
  },
  {
    title: 'Weapon Traits',
    content: 'Weapon traits.',
    cards: [
      { title: 'Impact', content: 'Dealing damage with this weapon applies Unbalanced 1' },
      { title: 'Agile', content: 'Maps reduced by 10 when Striking with this weapon' },
      { title: 'Ambush', content: 'When attacking from Hidden, this weapon deals an extra damage dice of the type specified' },
      { title: 'Automatic', content: 'If you successfully hit a target, subsequent Strikes with this weapon against that target are reduced by 1s until you take another action' },
      { title: 'Blunt', content: 'This weapon can deal non-lethal damage' },
      { title: 'Chamber', content: 'This weapon Reload is 1s but each Reload only loads one ammo' },
      { title: 'Charge', content: 'When you make a Strike, you can increase the number of seconds for this action. For each extra second, increase the number of dice in the attack' },
      { title: 'Close Quarters', content: 'This ranged weapon does not take a penalty for being in melee range' },
      { title: 'Concealed', content: 'This weapon can be equipped without being visible to others' },
      { title: 'Delay X', content: 'This weapon deals damage X seconds after the initial action' },
      { title: 'Devastating', content: 'This weapon deals double damage to health' },
      { title: 'Dual-Wield', content: 'When you make a Strike with a Dual-Wield weapon, your next strike with a different Dual-Wield weapon is reduced by 1s' },
      { title: 'Mountable', content: 'You can take the Mount action with this weapon (Mount 1s: You mount the weapon onto a surface no bigger than half-cover, gain a +10 Strike bonus with this weapon)' },
      { title: 'One-Handed', content: 'This weapon is equipped in one hand' },
      { title: 'Pinpoint', content: 'Double the aiming bonus for this weapon' },
      { title: 'Precise', content: 'You may use DSC as the Strike stat for this weapon' },
      { title: 'Reach X', content: 'Your melee range is increased by X while making a Strike with this weapon' },
      { title: 'Shocking', content: 'Dealing damage with this weapon applies Shocked 1' },
      { title: 'Sweep', content: 'Gain +10 Strike against a target if it is not the first target this turn' },
      { title: 'Thrown X', content: 'This weapon can be used to make a Ranged Strike with range Xm(X*2m) and use the Strike Target with SNS' },
      { title: 'Two-handed', content: 'This weapon must be equipped with both hands' },
      { title: 'Versatile', content: 'This weapon can be held with one or two hands' }
    ]
    ,
  },
];

export default ruleSections;