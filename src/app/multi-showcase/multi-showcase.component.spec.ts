import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MultiShowcaseComponent } from "./multi-showcase.component";

describe("ShowcaseComponent", () => {
  let component: MultiShowcaseComponent;
  let fixture: ComponentFixture<MultiShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
