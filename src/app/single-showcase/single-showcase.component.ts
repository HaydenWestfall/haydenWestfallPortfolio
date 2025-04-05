import { Component, Input } from "@angular/core";
import { works } from "../works";

@Component({
  selector: "app-single-showcase",
  templateUrl: "./single-showcase.component.html",
  styleUrl: "./single-showcase.component.scss",
})
export class SingleShowcaseComponent {
  @Input("projects") projects: any = [];

  allWorks = works;
  hoverIndex: number | null = null;
}
