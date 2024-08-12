import { Directive, HostListener, Input } from "@angular/core";
import { gsap, Power2 } from "gsap";

@Directive({
  selector: "[appParallaxButton]",
})
export class ParallaxButtonDirective {
  constructor() {}

  @HostListener("mouseenter", ["$event"])
  mouseEnter(event: any): void {
    gsap.to(event.srcElement, 0.3, { scale: 1.15 });
  }

  @HostListener("mouseleave", ["$event"])
  mouseLeave(event: any): void {
    gsap.to(event.srcElement, 0.3, { scale: 1 });
    const element: HTMLElement = event.target as HTMLElement;
    gsap.to(document.getElementById(element.children[0].id), 0.3, {
      x: 0,
      y: 0,
    });
  }

  @HostListener("mousemove", ["$event"])
  mouseMove(event: any): void {
    // parallaxCursor(e, this, 3);
    this.callParallax(event, event.currentTarget, event.currentTarget.children[0].id);
  }

  callParallax(e: any, parent: any, attributeId: string): void {
    this.parallaxIt(e, parent, document.getElementById(attributeId), 35);
  }

  parallaxIt(e: any, parent: any, target: any, movement: any): void {
    var boundingRect = parent.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top - window.scrollY;

    gsap.to(target, 0.25, {
      x: ((relX - boundingRect.width / 3) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 3) / boundingRect.height) * movement,
      ease: Power2.easeOut,
    });
  }

  parallaxCursor(e: any, parent: any, movement: any): void {
    var rect = parent.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    // pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    // pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
    // TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
  }
}
