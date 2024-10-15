import './style.css';
import ListTemplate from './templates/ListTemplate.ts';
import FullList from './model/FullList.ts';
import ListItem from './model/ListItem.ts';

const formElement: HTMLFormElement = document.getElementById('itemForm') as HTMLFormElement;
const inputElement: HTMLInputElement = document.getElementById('newItem') as HTMLInputElement;
const divListItemsElement: HTMLDivElement = document.getElementById('listItems') as HTMLDivElement;
const buttonCleanAll: HTMLButtonElement = document.getElementById('clearItemsButton') as HTMLButtonElement;

const fullList: FullList = new FullList();
const listTemplate: ListTemplate = new ListTemplate();

document.addEventListener('DOMContentLoaded', () => {
    fullList.loadList();
    renderListElement();
});

formElement.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const newItemText: string = inputElement.value.trim();
    if (newItemText.length === 0) return;

    const newItem = new ListItem(newItemText);
    fullList.addItem(newItem);
    fullList.saveList();

    inputElement.value = '';
    renderListElement();
});

buttonCleanAll.addEventListener('click', () => {
    fullList.clearList();
    renderListElement();
})

const renderListElement = () => {
    if (divListItemsElement) {
        divListItemsElement.innerHTML = '';
        divListItemsElement.appendChild(listTemplate.render(fullList));
    }
}
