import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWhiteLogoComponent } from './small-white-logo.component';

describe('SmallWhiteLogoComponent', () => {
  let component: SmallWhiteLogoComponent;
  let fixture: ComponentFixture<SmallWhiteLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallWhiteLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallWhiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
