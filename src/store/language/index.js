import { makeObservable, observable, action } from 'mobx';

class LanguageStore {
    constructor() {
        this.value = 'ru';

        makeObservable(this, {
            value: observable,
            setValue: action,
        });
    }

    setValue(newValue) {
        this.value = newValue;
    }
}

const languageStore = new LanguageStore();

export default languageStore;