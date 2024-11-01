import { AfterViewInit, Component, inject, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
  Scroll,
} from "@angular/router";
import Lenis from "lenis";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { coverAnimation, coverAnimation2, routeAnimation } from "./animations";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [routeAnimation, coverAnimation, coverAnimation2],
})
export class AppComponent implements OnInit, AfterViewInit {
  showCover = true;
  newRouteName = "";
  coverAnimationTiming = 1000;
  accentRightAlignment = "";
  coverState = "show";

  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger, Draggable);
    gsap.registerPlugin(CustomEase);
    CustomEase.create("myCustomEase", "M0,0 C0.87,0 0.13,1 1,1");

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const urlSegments = event.url.split("/");
        this.newRouteName = this.mapRouteName(urlSegments[urlSegments.length - 1]);
        this.coverState = "show";

        setTimeout(() => {
          this.getRightAlignment();
          this.animateAccent();
        }, 500);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Let cover animation cover the screen in 1s
        // Allow 200ms delay where the cover is over top of the screen
        setTimeout(() => {
          window.scrollTo(0, 0);
          this.coverState = "hide";
          ScrollTrigger.refresh();
        }, this.coverAnimationTiming + 200);
      }
    });
  }

  ngAfterViewInit(): void {
    const urlSegments = window.location.pathname.split("/");
    this.newRouteName = this.mapRouteName(urlSegments[urlSegments.length - 1]);
    setTimeout(() => {
      this.animateAccent();
      this.getRightAlignment();
    });
  }

  resetCover(): void {
    if (this.coverState === "hide") this.coverState = "initial";
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  animateAccent() {
    if (window.innerWidth <= 768) {
      this.animateMobile();
    } else {
      this.animateDesktop();
    }
  }

  animateDesktop(): void {
    const accentTextContainer = document.getElementById("accent2");
    const position = `calc(50% + ${accentTextContainer!.getBoundingClientRect().height / 2}px)`;
    const position2 = `calc(100% + ${accentTextContainer!.getBoundingClientRect().height}px + 1rem)`;
    const duration = "0.6";
    const tl = gsap.timeline();
    tl.fromTo("#accent1", { top: "0" }, { top: position, duration: duration, ease: "myCustomEase" });
    tl.fromTo("#accent2", { bottom: "0" }, { bottom: position, duration: duration, ease: "myCustomEase" }, 0);
    tl.fromTo("#accent1", { top: position }, { top: position2, duration: duration, ease: "myCustomEase" });
    tl.fromTo(
      "#accent2",
      { bottom: position },
      { bottom: position2, duration: duration, ease: "myCustomEase" },
      `-=${duration}`
    );
  }

  animateMobile(): void {
    const accentTextContainer = document.getElementById("accent2");
    const position = `calc(50% - ${accentTextContainer!.getBoundingClientRect().width / 2}px)`;
    const position2 = `calc(-100% - ${accentTextContainer!.getBoundingClientRect().width}px + 1rem)`;

    const duration = "0.6";
    const tl = gsap.timeline();
    tl.fromTo("#accent1", { right: "100%" }, { right: position, duration: duration, ease: "myCustomEase" });
    tl.fromTo("#accent2", { left: "100%" }, { left: position, duration: duration, ease: "myCustomEase" }, 0);
    tl.fromTo("#accent1", { right: position }, { right: position2, duration: duration, ease: "myCustomEase" });
    tl.fromTo(
      "#accent2",
      { left: position },
      { left: position2, duration: duration, ease: "myCustomEase" },
      `-=${duration}`
    );
  }

  getRightAlignment(): void {
    const accent2 = document.getElementById("accent2");
    this.accentRightAlignment = `calc(-${accent2?.getBoundingClientRect().height}px + 8rem)`;
  }

  mapRouteName(routePath: string): string {
    const uppercaseRoutes = ["about", "work", "contact", "gearHead", "fireshare", "tradeshark", "stf"];

    if (uppercaseRoutes.includes(routePath)) {
      return routePath.toUpperCase();
    } else if (routePath === "maddieWestEvents") {
      return "MADDIE WEST EVENTS";
    } else if (routePath === "missLisaBooks") {
      return "MISS LISA BOOKS";
    }

    return "HOME";
  }
}
