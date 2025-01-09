const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterCreature = mythicalCreatures.find(({type}) => type === 'Water');
console.log(waterCreature.name);

const griffinIndex = mythicalCreatures.findIndex(({name}) => name === 'Griffin');
console.log(griffinIndex);

const lastSeenCreature = mythicalCreatures.find(({lastSeen}) => lastSeen === 'Enchanted Forest');
console.log(lastSeenCreature.name);