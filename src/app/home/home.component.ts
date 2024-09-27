import { AfterViewInit, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  featuredProjects = [
    {
      label: "GEARHEAD",
      role: "Technical Lead | Commercial",
      link: "/work/gearHead",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
    {
      label: "MADDIE WEST EVENTS",
      role: "Design + Dev | Freelance",
      link: "/work/maddieWestEvents",
      showcase: "../../assets/stf/app_showcase.png",
      hover: false,
    },
    {
      label: "TRADEWAVE",
      role: "Technical Lead | Commercial",
      link: "/work/tradeWave",
      showcase: "../../assets/maddieWestEvents/app_showcase.png",
      hover: false,
    },
    {
      label: "STF",
      role: "Design + Dev | Freelance",
      link: "/work/stf",
      showcase: "../../assets/stf/app_showcase.png",
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
    { img: "../../assets/home_projects/spabok_home.png", bg: "#DDDDE7" },
    { img: "../../assets/home_projects/stf_auto.png", bg: "#D0D8DB" },
    { img: "../../assets/home_projects/tradewave.png", bg: "#A2B0AC" },
    { img: "../../assets/home_projects/mw_logo.jpg", bg: "#E1DDD7" },
    { img: "../../assets/home_projects/spabok_home.png", bg: "#DDDDE7" },
    { img: "../../assets/home_projects/stf_auto.png", bg: "#D0D8DB" },
    { img: "../../assets/home_projects/tradewave.png", bg: "#A2B0AC" },
    { img: "../../assets/home_projects/mw_logo.jpg", bg: "#E1DDD7" },
  ];

  animationFrameId: number | null = null;
  animations: gsap.core.Tween[] = [];
  direction = -1;
  slider = 0;
  xPos = 0;

  themeService = inject(ThemeService);

  constructor() {}

  ngOnInit(): void {
    gsap.to(document.getElementById("name-slider"), {
      scrollTrigger: {
        trigger: document.getElementById("name-slider"),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      x: "-500px",
    });

    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  ngAfterViewInit(): void {
    this.themeService.theme = "light";
    if (window.innerWidth >= 768) {
      this.animations.push(this.themeService.setupTranslateAnimation("#about-btn", 0, 0, 350, 0, "power1.out"));
      this.animations.push(this.themeService.setupTranslateAnimation("#portfolio-1-home", -300, -100, 0, 0));
      this.animations.push(this.themeService.setupTranslateAnimation("#portfolio-2-home", -100, -300, 0, 0));
      this.animations.push(
        gsap.to("#hero-contact", {
          y: -125,
          scrollTrigger: {
            trigger: "#hero-contact",
            start: "top 34%",
            end: "bottom top",
            scrub: true,
          },
        })
      );
    }
  }

  animate = () => {
    if (this.xPos < -100) {
      this.xPos = 0;
    } else if (this.xPos > 0) {
      this.xPos = -100;
    }
    gsap.set(document.getElementById("primary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("secondary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("tertiary"), { xPercent: this.xPos });
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.xPos += 0.04;
  };

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId!);
    // this.animations.forEach((x) => x.kill());
  }
}
