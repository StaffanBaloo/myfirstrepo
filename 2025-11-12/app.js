class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotalItems() {
        return this.items.length;
    }

    listItemsArrow = () => {
        let itemList = "";
        for (let i = 0; i < this.items.length; i++) {
            itemList += this.items[i];
            if (i < this.items.length - 1) {
                itemList += ",";
            }
        }
        return itemList;
    };
}
