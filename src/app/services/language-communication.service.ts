import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Languages } from '../models/languages.model';
import { LANGUAGES } from '../constants/languages.constants';

@Injectable({
  providedIn: 'root',
})
export class LanguageCommunicationService {
  private selectedLanguageSubject = new BehaviorSubject<Languages>(
    LANGUAGES[0]
  );
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setSelectedLanguage(language: Languages) {
    this.selectedLanguageSubject.next(language);
  }

  constructor() {}
}
