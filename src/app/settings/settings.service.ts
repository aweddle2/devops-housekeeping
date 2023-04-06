import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  setSetting(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getSetting(key: string): string {
    let value = localStorage.getItem(key);
    if (value === null) {
      return '';
    } else {
      return value;
    }
  }
}
