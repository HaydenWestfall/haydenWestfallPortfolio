import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTwoComponent } from './projects-two.component';

describe('ProjectsTwoComponent', () => {
  let component: ProjectsTwoComponent;
  let fixture: ComponentFixture<ProjectsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
