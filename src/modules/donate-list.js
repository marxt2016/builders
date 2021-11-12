import * as Utils from "../core/utils/index"

export class DonateList {
    #container
    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'donates-container';
    }
    #createElementList(elementName, elementTag, elementClass) {
        elementName = document.createElement(elementTag);
        elementName.className = elementClass;
        return elementName
    }

    #createListItem(listItem) {
        const listItemHTML = this.#createElementList(listItemHTML, 'div', 'donate-item');
        listItemHTML.innerHTML = `${Utils.getFormattedTime(listItem.date)} - <b>${listItem.amount}</b>`
        return listItemHTML
    }
    updateDonates(updatedDonates) {
        let containerDonates = this.#container.querySelector('.donates-container__donates');
        containerDonates.innerHTML = '';
        updatedDonates.map(element => {
            const itemL = this.#createListItem(element);
            containerDonates.append(itemL);
        });
        return containerDonates;

    }

    render(donates) {
        const listHeader = this.#createElementList(listHeader, 'h2', 'donates-container__title');
        listHeader.textContent = 'Donates list';
        const listContainer = this.#createElementList(listContainer, 'div', 'donates-container__donates');
        donates.map(element => {
            const itemL = this.#createListItem(element);
            listContainer.append(itemL);
        });
        this.#container.append(listHeader, listContainer);
        return this.#container;

    }
}