import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInfoCubeComponent } from './projects-info-cube.component';

describe('ProjectsInfoCubeComponent', () => {
  let component: ProjectsInfoCubeComponent;
  let fixture: ComponentFixture<ProjectsInfoCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsInfoCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInfoCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
