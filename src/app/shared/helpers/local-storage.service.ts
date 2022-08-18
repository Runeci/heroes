import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public saveToLocalStorage(key: string, value: unknown): void {
        const strVal = JSON.stringify(value);
        localStorage.setItem(key, strVal);
    }

    public getFromLocalStorage<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key)) as T;
    }

    public removeFromLocalStorage(key: string):void {
        localStorage.removeItem(key);
    }
}
