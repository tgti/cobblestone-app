import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCardsPage } from './favorite-cards.page';

describe('FavoriteCardsPage', () => {
  let component: FavoriteCardsPage;
  let fixture: ComponentFixture<FavoriteCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
