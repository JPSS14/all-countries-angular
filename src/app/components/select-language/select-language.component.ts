import { Component } from '@angular/core';
import { LANGUAGES } from '../../constants/languages.constants';
import { Languages } from '../../models/languages.model';
import { LanguageCommunicationService } from '../../services/language-communication.service';

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

  constructor(private languageService: LanguageCommunicationService) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(option: Languages) {
    this.selectedLanguage = option;
    this.languageService.setSelectedLanguage(option);
    this.isDropdownOpen = false;
  }
}
