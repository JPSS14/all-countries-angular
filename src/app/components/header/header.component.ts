import { Component } from '@angular/core';
import { SelectLanguageComponent } from '../select-language/select-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SelectLanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
