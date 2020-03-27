import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoCubeComponent } from './personal-info-cube.component';

describe('PersonalInfoCubeComponent', () => {
  let component: PersonalInfoCubeComponent;
  let fixture: ComponentFixture<PersonalInfoCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
