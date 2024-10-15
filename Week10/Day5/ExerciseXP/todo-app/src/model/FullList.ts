import ListItem from "./ListItem.ts";

class FullList {
    private _list: ListItem[] = [];
    private _localStorageKey: string = 'list';

    mapToListItem(data: { _id: string; _item: string; _checked: boolean }[]): ListItem[] {
        return data.map(item =>
            new ListItem(
                item._item,
                item._checked,
                item._id));
    }

    loadList(): void {
        const storeList = JSON.parse(localStorage.getItem(this._localStorageKey) || '[]');
        this._list = this.mapToListItem(storeList);
    }

    saveList(): void {
        localStorage.setItem(this._localStorageKey, JSON.stringify(this._list));
    }

    addItem(item: ListItem): void {
        this._list.push(item);
        this.saveList();
    }

    clearList(): void {
        this._list = [];
        this.saveList();
    }

    toggleChecked(id: string): void {
        const item = this._list.find(i => i.id === id);
        if (item) {
            item.checked = !item.checked;
            this.saveList();
        }
    }

    removeItem(id: string): void {
            this._list = this._list.filter(i => i.id !== id);
            this.saveList();
    }

    get list(): ListItem[] {
        return this._list;
    }
}

export default FullList;