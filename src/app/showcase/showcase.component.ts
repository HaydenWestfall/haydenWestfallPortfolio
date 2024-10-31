import { Component, HostListener, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-showcase",
  templateUrl: "./showcase.component.html",
  styleUrl: "./showcase.component.scss",
})
export class ShowcaseComponent implements OnInit {
  @Input("multi") multi: boolean = false;
  @Input("projects") projects: any = [];

  hoverIndex: number | null = null;
  below768Pixels: boolean = false;

  ngOnInit(): void {
    console.log(this.projects);
    this.below768Pixels = window.innerWidth < 768;
  }

  isIntersecting(status: boolean, index: number) {
    console.log("Element #" + index + " is intersecting " + status);
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
