import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountrieComponent } from './card-countrie.component';

describe('CardCountrieComponent', () => {
  let component: CardCountrieComponent;
  let fixture: ComponentFixture<CardCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCountrieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
