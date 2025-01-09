import { addItem, removeItem, listItems } from './inventory.mjs';

addItem('Car');
addItem('Toy');
addItem('Pen');
listItems();

removeItem('Pen');
listItems();