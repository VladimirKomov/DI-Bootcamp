import {ReactElement} from "react";

interface ListProps<T extends {id: number}> {
    items: T[];
    renderItem: (item: T) => ReactElement;
}

const List = <T extends {id: number}>({items, renderItem}: ListProps<T>):ReactElement => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{renderItem(item)}</div>
            ))}
        </div>
    )
}

export default List;