import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowcaseComponent } from './single-showcase.component';

describe('SingleShowcaseComponent', () => {
  let component: SingleShowcaseComponent;
  let fixture: ComponentFixture<SingleShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
