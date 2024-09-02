import { Component, Input } from '@angular/core';
import { Countries } from '../../models/countries.model';
import { CommonModule } from '@angular/common';
import { LanguageCommunicationService } from '../../services/language-communication.service';
import { Languages } from '../../models/languages.model';
import { LANGUAGES } from '../../constants/languages.constants';

@Component({
  selector: 'app-card-countrie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-countrie.component.html',
  styleUrl: './card-countrie.component.css',
})
export class CardCountrieComponent {
  @Input() item!: Countries;
  selectedLanguage: Languages = LANGUAGES[0];

  constructor(private languageService: LanguageCommunicationService) {}

  ngOnInit() {
    this.languageService.selectedLanguage$.subscribe((language) => {
      this.selectedLanguage = language;
    });
  }
}
