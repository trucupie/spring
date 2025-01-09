const items = [];

export const addItem = (item) => {
    items.push(item);
    console.log(`Item added: ${item}`);
};

export const removeItem = (item) => {
    const removeIndex = items.findIndex((value) => value === item);
    if (removeIndex === -1) {
        console.log(`Item not found: ${item}`);
        return;
    }

    items.splice(removeIndex, 1);
    console.log(`Item removed: ${item}`);
};

export const listItems = () => {
    items.forEach((item) => console.log(item));
};
