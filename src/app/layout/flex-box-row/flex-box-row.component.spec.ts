import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxRowComponent } from './flex-box-row.component';

describe('FlexBoxRowComponent', () => {
  let component: FlexBoxRowComponent;
  let fixture: ComponentFixture<FlexBoxRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBoxRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
