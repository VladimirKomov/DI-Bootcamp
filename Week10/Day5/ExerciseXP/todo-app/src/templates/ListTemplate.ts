import FullList from "../model/FullList.ts";



class ListTemplate {
    ulElement: HTMLUListElement;

    constructor() {
        this.ulElement = document.getElementById('listItems') as HTMLUListElement;
    }

    render(fullList: FullList): HTMLUListElement {
        this.ulElement.innerHTML = '';

        fullList.list.forEach(item => {
            const liElement = document.createElement('li');

            liElement.innerText = item.item;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.addEventListener('click', () => {
                fullList.toggleChecked(item.id);
            })

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'X';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            });

            liElement.appendChild(checkbox);
            liElement.appendChild(deleteButton);
            this.ulElement.appendChild(liElement);
        })

        return this.ulElement;
    }
}

export default ListTemplate;