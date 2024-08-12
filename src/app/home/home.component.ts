import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ThemeService } from "../theme.service";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);

  name = "HAYDEN WESTFALL -- HAYDEN WESTFALL -- HAYDEN WESTFALL -- HAYDEN WESTFALL -- ";

  featuredProjects = [
    {
      label: "GEARHEAD",
      role: "Technical Lead | Commercial",
      link: "/work/gearHead",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
    {
      label: "MADDIE WEST EVENTS",
      role: "Design + Dev | Freelance",
      link: "/work/maddieWestEvents",
      showcase: "../../assets/stf_showcase.png",
      hover: false,
    },
    {
      label: "TRADEWAVE",
      role: "Technical Lead | Commercial",
      link: "/work/tradeWave",
      showcase: "../../assets/maddie_west_showcase.png",
      hover: false,
    },
    {
      label: "STF",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/stf_showcase.png",
      hover: false,
    },
  ];

  portfolio1 = [
    {
      img: "/assets/home_projects/maddie_west_journal.png",
      bg: "#E2DED7",
    },
    {
      img: "/assets/home_projects/Business card front.png",
      bg: "#ECEDF0",
    },
    { img: "../../assets/home_projects/stf_home.png", bg: "#DAD5D2" },
    { img: "../../assets/home_projects/slic_main.png", bg: "#E4E9EE" },
  ];

  portfolio2 = [
    { img: "../../assets/home_projects/spabok_home.png", bg: "#DDDDE7" },
    { img: "../../assets/home_projects/stf_auto.png", bg: "#D0D8DB" },
    { img: "../../assets/home_projects/tradewave.png", bg: "#A2B0AC" },
    { img: "../../assets/home_projects/mw_logo.jpg", bg: "#E1DDD7" },
  ];

  ticker = [
    { value: "4", label: "Lead designer" },
    { value: "5", label: "Freelance projects" },
    { value: "6", label: "Years experience" },
    { value: "3", label: "Certifications" },
  ];

  lastScrollTop = 0;
  scrollTimeout = null as any;
  hoverIndex: number | null = null;

  animations: gsap.core.Tween[] = [];
  private bigNameTween: gsap.core.Tween = null as any;
  rewindtween: gsap.core.Tween = null as any;
  forwardtween: gsap.core.Tween = null as any;

  constructor() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  ngAfterViewInit(): void {
    this.themeService.theme = "light";
    this.bigNameTween = gsap.to("#name", {
      x: "25%",
      duration: 12,
      repeat: -1,
      ease: "none",
    });

    this.animations.push(this.bigNameTween);
    this.animations.push(this.themeService.setupTranslateAnimation("#contact-btn", 0, 0, -200, 0));
    this.animations.push(this.themeService.setupTranslateAnimation("#about-btn", 0, 0, 250, 0, "power1.out"));
    this.animations.push(this.themeService.setupTranslateAnimation("#portfolio1", -300, -100, 0, 0));
    this.animations.push(this.themeService.setupTranslateAnimation("#portfolio2", -100, -300, 0, 0));

    gsap.to("#contact-btn", {
      scrollTrigger: {
        trigger: "#contact-btn",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: this.updateRotation,
      },
    });
  }

  updateRotation() {
    const scrollPosition = window.scrollY;
    const rotationDegree = scrollPosition % 360; // Calculate rotation degree based on scroll position
    document.documentElement.style.setProperty("--rotation-degree", rotationDegree + "deg");
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let scrollDiff = Math.abs(scrollTop - this.lastScrollTop);
    scrollDiff = scrollDiff > 100 ? 100 : scrollDiff;
    const animationSpeed = 20 * (scrollDiff / 100);

    if (scrollTop > this.lastScrollTop) {
      if (this.forwardtween) {
        this.forwardtween.kill();
      }

      const rewindDuration = 1 * (scrollDiff / 100);
      const newTime = this.bigNameTween.time() - rewindDuration;
      this.bigNameTween.seek(newTime);

      this.rewindtween = gsap.to(this.bigNameTween, {
        time: newTime,
        duration: 0.4,
      });
    } else {
      if (this.rewindtween) {
        this.rewindtween.kill();
      }

      this.forwardtween = gsap.to(this.bigNameTween, {
        timeScale: scrollTop ? 1 + animationSpeed : 1,
        duration: 0.75,
      });
    }

    // After a backoff, reset the animation back to its original speed
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => this.resetAnimation());

    // Save the current scroll position
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // @HostListener("document:mousemove", ["$event"])
  // onMouseMove(event: MouseEvent) {
  //   this.pointArrowAtCursor(event.clientX, event.clientY);
  // }

  // pointArrowAtCursor(cursorX: number, cursorY: number) {
  //   const arrowElement = document.getElementById("pointer");
  //   // const arrowElement = arrow.nativeElement;
  //   const arrowRect = arrowElement!.getBoundingClientRect();
  //   const arrowX = arrowRect.left + arrowRect.width / 2;
  //   const arrowY = arrowRect.top + arrowRect.height / 2;

  //   const angle = Math.atan2(cursorY - arrowY, cursorX - arrowX) * (180 / Math.PI);
  //   arrowElement!.style.transform = `rotate(${angle + 45}deg)`;
  // }

  resetAnimation() {
    gsap.to(this.bigNameTween, {
      timeScale: 1,
      duration: 0.75,
    });
  }

  deactivateShowcase(index: number | null) {
    const element = document.getElementById("showcase-" + index!);
    element?.classList.add("deactivate");
    setTimeout(() => {
      element?.classList.remove("deactivate");
    }, 600);
  }

  ngOnDestroy(): void {}
}
