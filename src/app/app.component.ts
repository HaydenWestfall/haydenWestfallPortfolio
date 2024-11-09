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
import { coverAnimation, routeAnimation } from "./animations";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [routeAnimation, coverAnimation],
})
export class AppComponent implements OnInit, AfterViewInit {
  showCover = true;
  newRouteName = "";
  coverAnimationTiming = 1000;
  accentRightAlignment = "";
  coverState = "show";
  isInitialLoad = true;
  homeRoute = "//\\/\\/";

  router = inject(Router);
  route = inject(ActivatedRoute);
  themeService = inject(ThemeService);

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
    CustomEase.create("myCustomEaseOut", "M0,0 C0.13,0 0.87,1 1,1");

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const urlSegments = event.url.split("/");
        this.newRouteName = this.mapRouteName(urlSegments[urlSegments.length - 1]);
        this.coverState = "show";
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Let cover animation cover the screen in 1s
        // Allow 200ms delay where the cover is over top of the screen
        setTimeout(() => {
          window.scrollTo(0, 0);
          if (this.isInitialLoad && !this.newRouteName) {
            this.pageInit();
          } else {
            this.coverState = "hide";
            this.themeService.notifyChange();
            this.isInitialLoad = false;
          }
          ScrollTrigger.refresh();
        }, this.coverAnimationTiming + 200);
      }
    });
  }

  ngAfterViewInit(): void {
    const urlSegments = window.location.pathname.split("/");
    this.newRouteName = this.mapRouteName(urlSegments[urlSegments.length - 1]);
  }

  async pageInit() {
    this.newRouteName = "";
    await this.spellWord("//\\/\\/");
    setTimeout(() => {
      this.coverState = "hide";
      this.themeService.notifyChange();
      this.isInitialLoad = false;
    }, 750);
  }

  spellWord(word: string): Promise<void> {
    return new Promise((resolve) => {
      let index = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          this.newRouteName += word[index];
          index++;
          if (index === word.length) {
            clearInterval(intervalId);
            resolve(); // Resolves the promise when done
          }
        }, Math.floor(Math.random() * (250 - 150 + 1)) + 150);
      }, 500);
    });
  }

  resetCover(): void {
    if (this.coverState === "hide") this.coverState = "initial";
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  mapRouteName(routePath: string): string {
    const uppercaseRoutes = ["about", "work", "contact", "innobuild", "fireshare", "tradewave", "stf"];

    if (uppercaseRoutes.includes(routePath)) {
      this.isInitialLoad = false;
      return routePath.toUpperCase();
    } else if (routePath === "maddieWestEvents") {
      this.isInitialLoad = false;
      return "MADDIE WEST";
    } else if (routePath === "missLisaBooks") {
      this.isInitialLoad = false;
      return "MISS LISA";
    } else if (this.isInitialLoad) {
      return "";
    }

    this.isInitialLoad = false;
    return "//\\/\\/";
  }
}
