import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDealsPage } from './current-deals.page';

describe('CurrentDealsPage', () => {
  let component: CurrentDealsPage;
  let fixture: ComponentFixture<CurrentDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
