import { Injectable } from "@angular/core";
import { gsap } from "gsap";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  theme = "light";

  constructor() {}

  setupTranslateAnimation(
    element: any,
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    ease?: string
  ): gsap.core.Tween {
    return gsap.fromTo(
      element,
      { x: x1, y: y1 },
      {
        x: x2,
        y: y2,
        ease: ease !== null ? ease : "",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }
}
