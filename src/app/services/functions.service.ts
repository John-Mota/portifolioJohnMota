import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private isDarkThemeSubject = new BehaviorSubject<boolean>(true);
  public isDarkTheme$ = this.isDarkThemeSubject.asObservable();

   private readonly THEME_STORAGE_KEY = 'appTheme';

   constructor() {
    const storedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
    if (storedTheme) {
      this.isDarkThemeSubject.next(storedTheme === 'dark');
    }
  }

  toggleTheme() {
    this.isDarkThemeSubject.next(!this.isDarkThemeSubject.value);

    const newTheme = this.isDarkThemeSubject.value ? 'dark' : 'light';
    localStorage.setItem(this.THEME_STORAGE_KEY, newTheme);
  }

  getIsDarkThemeValue(): boolean {
    return this.isDarkThemeSubject.value;
  }

}
