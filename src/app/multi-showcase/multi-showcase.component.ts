import { Component, HostListener, Input, OnInit } from "@angular/core";
import { works } from "../works";

@Component({
  selector: "app-multi-showcase",
  templateUrl: "./multi-showcase.component.html",
  styleUrl: "./multi-showcase.component.scss",
})
export class MultiShowcaseComponent implements OnInit {
  @Input("multi") multi: boolean = false;
  @Input("projects") projects: any = [];

  showcaseProjects = works;
  hoverIndex: number | null = null;
  below768Pixels: boolean = false;
  defaultShowcaseHighlight: number = 0;

  ngOnInit(): void {
    this.below768Pixels = window.innerWidth < 768;
  }

  deactivateShowcase(index: number | null) {
    const element = document.getElementById("showcase-" + index!);
    element?.classList.add("deactivate");
    setTimeout(() => {
      element?.classList.remove("deactivate");
    }, 600);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.below768Pixels = window.innerWidth < 768;
  }
}
