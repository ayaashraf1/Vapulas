import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticFilterComponent } from './alphabetic-filter.component';

describe('AlphabeticFilterComponent', () => {
  let component: AlphabeticFilterComponent;
  let fixture: ComponentFixture<AlphabeticFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
