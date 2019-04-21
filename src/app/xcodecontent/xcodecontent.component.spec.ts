import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcodecontentComponent } from './xcodecontent.component';

describe('XcodecontentComponent', () => {
  let component: XcodecontentComponent;
  let fixture: ComponentFixture<XcodecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcodecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcodecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
