import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardsPage } from './service-cards.page';

describe('ServiceCardsPage', () => {
  let component: ServiceCardsPage;
  let fixture: ComponentFixture<ServiceCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
