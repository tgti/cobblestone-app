import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealImagePage } from './deal-image.page';

describe('DealImagePage', () => {
  let component: DealImagePage;
  let fixture: ComponentFixture<DealImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
