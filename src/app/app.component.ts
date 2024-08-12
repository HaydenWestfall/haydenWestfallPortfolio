import { animate, group, query, style, transition, trigger } from "@angular/animations";
import { Component, HostListener, inject, OnInit } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import Lenis from "lenis";
import { gsap, Power2 } from "gsap";
import { CustomEase } from "gsap/CustomEase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [
    trigger("routeAnimations", [
      transition("* <=> *", [
        // Initially hide the entering page
        query(":enter, :leave", style({}), { optional: true }),
        // Animate the leaving page
        group([
          query(":leave", [animate("600ms 300ms ease", style({ opacity: 0 }))], {
            optional: true,
          }),
          // Animate the entering page
          query(
            ":enter",
            [style({ opacity: 0, transform: "translateX(100%)" }), animate("600ms 300ms ease", style({ opacity: 1 }))],
            { optional: true }
          ),
        ]),
      ]),
    ]),
    trigger("accentText", [
      transition("* <=> *", [
        // Initially hide the entering page
        query(":enter, :leave", style({ bottom: "10rem" }), { optional: true }),
        // Animate the leaving page
        group([
          query(":leave", [animate("600ms ease", style({ bottom: "-50rem" }))], {
            optional: true,
          }),
          // Animate the entering page
          query(":enter", [style({ bottom: "-50rem" }), animate("600ms ease", style({ bottom: "-50rem" }))], {
            optional: true,
          }),
        ]),
      ]),
    ]),
    trigger("coverAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        style({ transform: "translateY(0)" }),
        animate("1000ms cubic-bezier(0.87, 0, 0.13, 1)", style({ transform: "translateY(100%)" })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = "haydenWestfall";
  hideMessage = false;
  showCover = false;
  router = inject(Router);
  showAccent = false;
  newRouteName = "";

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
        setTimeout(() => {
          this.animateAccent();
        }, 500);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.showCover = false;
        }, 1200); // Small delay to allow cover to animate out
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideMessage = window.scrollY ? true : false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }

  onCoverAnimationDone() {
    if (!this.showCover) {
      // Additional logic after cover animation is done, if needed
    }
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
}
