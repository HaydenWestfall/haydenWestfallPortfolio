import { AfterViewInit, Component, inject, OnInit } from "@angular/core";
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
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, AfterViewInit {
  showCover = true;
  heroImageLoaded = false;
  coverAnimationTimedOut = false;
  newRouteName = "";
  coverAnimationTiming = 1000;
  accentRightAlignment = "";
  coverState = "show";
  homeRoute = "//\\/\\/";

  private readonly _router = inject(Router);
  public readonly _service = inject(ThemeService);

  ngOnInit(): void {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    CustomEase.create("myCustomEase", "M0,0 C0.87,0 0.13,1 1,1");
    CustomEase.create("myCustomEaseOut", "M0,0 C0.13,0 0.87,1 1,1");

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger !== "popstate") {
          const urlSegments = event.url.split("/");
          this.newRouteName = this.mapRouteName(urlSegments[urlSegments.length - 1]);
          this.coverState = "show";
        } else {
          this._service.isPopState = true;
        }
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Let cover animation cover the screen in 1s
        // Allow 200ms delay where the cover is over top of the screen
        setTimeout(() => {
          if (!this._service.isPopState) {
            window.scrollTo(0, 0);
          }
          if (this._service.isInitialLoad && !this.newRouteName) {
            this.pageInit();
          } else {
            this.coverState = "hide";
            this._service.notifyChange();
            this._service.isInitialLoad = false;
            setTimeout(() => {
              this.resetCover();
            }, 1000);
          }
          this._service.isPopState = false;
          ScrollTrigger.refresh();
        }, 200);
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

    // Ensure hero image is loaded before hiding cover animation
    this.waitForImageLoad().then(() => {
      this.heroImageLoaded = true;
      if (this.coverAnimationTimedOut) {
        this.coverState = "hide";
        this._service.notifyChange();
        this._service.isInitialLoad = false;
      }
    });

    // Show cover animation for at least 750ms before closing
    setTimeout(() => {
      this.coverAnimationTimedOut = true;
      if (this.heroImageLoaded) {
        this.coverState = "hide";
        this._service.notifyChange();
        this._service.isInitialLoad = false;
        setTimeout(() => {
          this.resetCover();
        }, 1000);
      }
    }, 750);
  }

  private waitForImageLoad(): Promise<void> {
    const backgroundImage = new Image();
    backgroundImage.src = "../assets/home/hero_image.webp";
    return new Promise((resolve) => {
      if (backgroundImage.complete) {
        resolve();
      } else {
        backgroundImage.onload = () => resolve(); // Resolve on image load
        backgroundImage.onerror = () => resolve(); // Resolve even if there's an error
      }
    });
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

  /**
   * If the cover animation is in the hide state. remove the animation property and
   * drop the cover animation down off screen bottom and then re add the animation
   * property.
   */
  resetCover(): void {
    if (this.coverState === "hide") {
      document.getElementById("coverContainer")?.classList.remove("animateCover");
      console.log(document.getElementById("coverContainer")?.classList);
      this.coverState = "initial";
      setTimeout(() => {
        document.getElementById("coverContainer")?.classList.add("animateCover");
      }, 50);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  mapRouteName(routePath: string): string {
    const uppercaseRoutes = ["about", "work", "contact", "innobuild", "fireshare", "tradewave", "stf"];

    if (uppercaseRoutes.includes(routePath)) {
      this._service.isInitialLoad = false;
      return routePath.toUpperCase();
    } else if (routePath === "maddieWestEvents") {
      this._service.isInitialLoad = false;
      return "MADDIE WEST EVENTS";
    } else if (routePath === "missLisaBooks") {
      this._service.isInitialLoad = false;
      return "MISS LISA BOOKS";
    } else if (this._service.isInitialLoad) {
      return "";
    }

    this._service.isInitialLoad = false;
    return "//\\/\\/";
  }
}
