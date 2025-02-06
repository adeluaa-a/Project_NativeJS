import {LOCAL_STORAGE_KEY} from './questions.js'

// функции для работы с LocalStorage

export function saveState(state) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

export function loadState() {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
        return JSON.parse(savedState);
    } else{
        return null;
    }
}

export function clearState() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}