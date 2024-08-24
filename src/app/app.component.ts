import { Component, inject, OnInit } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import Lenis from "lenis";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { coverAnimation, routeAnimation } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [routeAnimation, coverAnimation],
})
export class AppComponent implements OnInit {
  showCover = false;
  newRouteName = "";
  coverAnimationTiming = 1000;

  router = inject(Router);

  ngOnInit(): void {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(CustomEase);
    CustomEase.create("myCustomEase", "M0,0 C0.87,0 0.13,1 1,1");

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const url = event.url.split("/")[1].toUpperCase();
        this.newRouteName = url ? url : "HOME";
        this.showCover = true;

        // Half way through the cover animation show the accent words
        setTimeout(() => {
          this.animateAccent();
        }, this.coverAnimationTiming / 2);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Let cover animation cover the screen in 1s
        // Allow 200ms delay where the cover is over top of the screen
        setTimeout(() => {
          this.showCover = false;
        }, this.coverAnimationTiming + 200);
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }

  animateAccent() {
    const duration = "0.6";
    const tl = gsap.timeline();
    tl.fromTo("#accent1", { top: "0" }, { top: "75%", duration: duration, ease: "myCustomEase" });
    tl.fromTo("#accent2", { bottom: "0" }, { bottom: "75%", duration: duration, ease: "myCustomEase" }, 0);
    tl.fromTo("#accent1", { top: "75%" }, { top: "200%", duration: duration, ease: "myCustomEase" });
    tl.fromTo(
      "#accent2",
      { bottom: "75%" },
      { bottom: "200%", duration: duration, ease: "myCustomEase" },
      `-=${duration}`
    );
  }

  onActivate() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 1000);
  }
}
