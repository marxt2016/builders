import { settings as currency } from "../core/constants/settings";
export class DonateForm {

    #container
    #totalAmount
    constructor(totalAmount, createNewDonate) {
        this.#totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
        this.#container = document.createElement('form');
        this.#container.className = 'donate-form';
    }
    updateTotalAmount(newAmount) {
        let totalAmountElement = this.#container.querySelector('#total-amount');
        totalAmountElement.textContent = `${newAmount}${currency.currency}`;
    }
    #createElementCust(elementName, elementTag, elementText) {
        elementName = document.createElement(elementTag);
        elementName.textContent = elementText;
        return elementName
    }
    render() {
        const totalAmount = this.#createElementCust(totalAmount, 'h1', `28${currency.currency}`);
        totalAmount.id = 'total-amount';

        const inputLabel = this.#createElementCust(inputLabel, 'label', `Please, provide donation amount in ${currency.currency}`);
        inputLabel.className = 'donate-form__input-label';

        const buttonSubmit = this.#createElementCust(buttonSubmit, 'button', 'Donate');
        buttonSubmit.className = 'donate-form__submit-button';
        buttonSubmit.type = 'submit';

        let inputField = this.#createElementCust(inputField, 'input');
        inputField.className = 'donate-form__donate-input';
        inputField.name = 'amount';
        inputField.type = 'number';
        inputField.required = '';
        inputField.min = '0';
        inputField.max = '100';
        inputLabel.append(inputField);

        this.#container.append(totalAmount, inputLabel, buttonSubmit);
        this.#container.addEventListener('submit', (event) => {
            event.preventDefault();
            let input = this.#container.querySelector('.donate-form__donate-input');
            if (input.value.length) {
                const donate = { date: new Date(), amount: +input.value };
                this.createNewDonate(donate);
                input.value = '';
            }

        })
        return this.#container;
    }
}