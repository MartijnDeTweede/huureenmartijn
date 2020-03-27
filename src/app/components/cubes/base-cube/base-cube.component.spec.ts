import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCubeComponent } from './base-cube.component';

describe('BaseCubeComponent', () => {
  let component: BaseCubeComponent;
  let fixture: ComponentFixture<BaseCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
