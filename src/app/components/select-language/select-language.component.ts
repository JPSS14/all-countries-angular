import { Component } from '@angular/core';
import { LANGUAGES } from '../../constants/languages.constants';
import { Languages } from '../../models/languages.model';

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.css',
})
export class SelectLanguageComponent {
  languageList = LANGUAGES;

  selectedLanguage = this.languageList[0];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(option: Languages) {
    this.selectedLanguage = option;
    this.isDropdownOpen = false;
  }
}
