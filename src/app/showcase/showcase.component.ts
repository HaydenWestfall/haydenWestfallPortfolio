import { Component, Input } from "@angular/core";

@Component({
  selector: "app-showcase",
  templateUrl: "./showcase.component.html",
  styleUrl: "./showcase.component.scss",
})
export class ShowcaseComponent {
  @Input("multi") multi: boolean = false;
  @Input("projects") projects: any = [];

  hoverIndex: number | null = null;

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
}
