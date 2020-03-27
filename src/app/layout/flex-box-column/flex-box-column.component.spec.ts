import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxColumnComponent } from './flex-box-column.component';

describe('FlexBoxColumnComponent', () => {
  let component: FlexBoxColumnComponent;
  let fixture: ComponentFixture<FlexBoxColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBoxColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
