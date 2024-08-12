import { animate, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrl: "./cover.component.scss",
  animations: [
    trigger("coverAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("300ms ease-out", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        style({ transform: "translateY(0)" }),
        animate("300ms ease-in", style({ transform: "translateY(100%)" })),
      ]),
    ]),
  ],
})
export class CoverComponent {}
