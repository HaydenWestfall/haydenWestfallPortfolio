import { Injectable } from "@angular/core";
import { gsap } from "gsap";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  theme = "light";

  // Private Subject to keep the original Subject hidden
  private initPageSubject$ = new Subject<any>();

  // Public Observable that components can subscribe to
  initPage$ = this.initPageSubject$.asObservable();

  notifyChange() {
    this.initPageSubject$.next("initpage");
  }

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
