import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClubPage } from './text-club.page';

describe('TextClubPage', () => {
  let component: TextClubPage;
  let fixture: ComponentFixture<TextClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
