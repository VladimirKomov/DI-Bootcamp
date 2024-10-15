import { v4 as uuidv4 } from 'uuid';

interface ListItemInterface {
    id: string;
    item: string;
    checked: boolean;
}

class ListItem implements ListItemInterface {
    readonly _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(item: string, checked: boolean = false, id?: string) {
        this._id = id ?? uuidv4();
        this._item = item;
        this._checked = checked;
    }

    get id(): string {
        return this._id;
    }

    get item(): string {
        return this._item;
    }

    set item(value: string) {
        this._item = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}

export default ListItem;

