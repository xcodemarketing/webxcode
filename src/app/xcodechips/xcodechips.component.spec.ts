import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcodechipsComponent } from './xcodechips.component';

describe('XcodechipsComponent', () => {
  let component: XcodechipsComponent;
  let fixture: ComponentFixture<XcodechipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcodechipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcodechipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
