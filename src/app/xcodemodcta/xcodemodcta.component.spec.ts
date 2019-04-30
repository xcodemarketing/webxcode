import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcodemodctaComponent } from './xcodemodcta.component';

describe('XcodemodctaComponent', () => {
  let component: XcodemodctaComponent;
  let fixture: ComponentFixture<XcodemodctaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcodemodctaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcodemodctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
