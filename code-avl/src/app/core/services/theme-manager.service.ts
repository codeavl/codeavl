import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  private isDarkTheme = false;

  toggleTheme(): void {
    const htmlElement = document.documentElement as HTMLElement; // Selects the <html> tag
    this.isDarkTheme = !this.isDarkTheme;

    // Toggle the `data-bs-theme` attribute
    htmlElement.setAttribute(
      'data-bs-theme',
      this.isDarkTheme ? 'dark' : 'light'
    );

    // Save theme preference
    this.saveThemePreference();
  }

  setInitialTheme(): void {
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    const htmlElement = document.documentElement;

    // Set the theme based on saved preference
    this.isDarkTheme = savedTheme === 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
  }

  private saveThemePreference(): void {
    localStorage.setItem('preferredTheme', this.isDarkTheme ? 'dark' : 'light');
  }
}
