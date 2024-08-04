import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ThemeService } from "../theme.service";
import { gsap, Power2 } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  themeService = inject(ThemeService);

  name =
    "HAYDEN WESTFALL -- HAYDEN WESTFALL -- HAYDEN WESTFALL -- HAYDEN WESTFALL -- ";

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
      img: "../../assets/home_projects/maddie_west_journal.png",
      bg: "#E2DED7",
    },
    {
      img: "../../assets/home_projects/Business card front.png",
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
  currentTicker = 0;
  private intervalId: any;

  lastScrollTop = 0;
  duration = 12;

  private tween: gsap.core.Tween = null as any;
  private scrollTimeout: any;

  timeoutId = null as any;

  rewindtween: gsap.core.Tween = null as any;
  forwardtween: gsap.core.Tween = null as any;

  hoverIndex: number | null = null;

  ngOnInit(): void {
    this.themeService.theme = "light";
    //this.startInterval();

    gsap.registerPlugin(ScrollTrigger, Draggable);

    const scrollText = document.querySelector("#name") as any;
    const textWidth = scrollText!.offsetWidth;
    const containerWidth = window.innerWidth;

    this.tween = gsap.to("#name", {
      x: "25%",
      duration: this.duration, // Adjust the duration as needed
      repeat: -1,
      ease: "none",
    });

    // const test = gsap.fromTo(
    //   "#about-btn",
    //   { y: 60, opacity: 0 },
    //   {
    //     y: 0, // End position,
    //     opacity: 1,
    //     duration: 0.6, // Duration of 1 second
    //     ease: "power1.out", // Ease function
    //     scrollTrigger: {
    //       trigger: "#about-btn", // Element that triggers the animation
    //       start: "top bottom", // Start the animation when the top of the trigger element is at 80% of the viewport height
    //       end: "bottom top",
    //     },
    //   }
    // );

    // test.from("#about-btn", { y: 30, opacity: 0 });

    const element = document.getElementById("about-btn");
    const portfolio1 = document.getElementById("portfolio1");
    const portfolio2 = document.getElementById("portfolio2");

    // const scrollBox = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: element,
    //     pin: true,
    //     start: "top bottom",
    //     end: "bottom top",
    //     markers: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // scrollBox.from(element, { y: 30, opacity: 0 });

    gsap.fromTo(
      element,
      { y: 250 },
      {
        y: 0, // End position,
        ease: "power1.out", // Ease function
        scrollTrigger: {
          trigger: element, // Element that triggers the animation
          start: "top bottom", // Start the animation when the top of the trigger element is at 80% of the viewport height
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      portfolio1,
      { x: -300 },
      {
        x: -100, // End position,
        scrollTrigger: {
          trigger: portfolio1, // Element that triggers the animation
          start: "top bottom", // Start the animation when the top of the trigger element is at 80% of the viewport height
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      portfolio2,
      { x: -100 },
      {
        x: -300, // End position,
        scrollTrigger: {
          trigger: portfolio2, // Element that triggers the animation
          start: "top bottom", // Start the animation when the top of the trigger element is at 80% of the viewport height
          scrub: true,
        },
      }
    );

    setInterval(() => {
      console.log(this.tween.time());
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  resetAnimation() {
    console.log("resetting");
    gsap.to(this.tween, {
      timeScale: 1,
      duration: 0.75,
    });
  }

  deactivateAnimation(index: number | null) {
    const element = document.getElementById("showcase-" + index!);
    element?.classList.add("deactivate");
    setTimeout(() => {
      element?.classList.remove("deactivate");
    }, 600);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event): void {
    clearTimeout(this.scrollTimeout);
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    let scrollDiff = Math.abs(scrollTop - this.lastScrollTop);
    scrollDiff = scrollDiff > 100 ? 100 : scrollDiff;

    const speed = 20 * (scrollDiff / 100);

    // console.log(scrollTop);
    // console.log(this.lastScrollTop);
    // console.log(1 + speed);
    // this.tween.timeScale(scrollTop ? 1 + speed : 1); // Increase speed when scrolling

    const currentProgress = this.tween.time() / this.duration;
    if (scrollTop > this.lastScrollTop) {
      if (this.forwardtween) {
        this.forwardtween.kill();
      }

      // Get the current time of the animation
      const currentTime = this.tween.time();

      let testRewindSpeed = 1 * (scrollDiff / 100);

      //console.log(currentTime);=
      // Calculate the new time by subtracting the specified seconds
      const newTime = currentTime - testRewindSpeed; // Ensure time doesn't go below 0

      // Seek to the new time
      this.tween.seek(newTime);

      this.rewindtween = gsap.to(this.tween, {
        time: newTime,
        duration: 0.4,
      });

      // gsap.to(this.tween, {
      //   timeScale: scrollTop ? 1 + speed : 1,
      //   duration: 0.75,
      // });
    } else {
      if (this.rewindtween) {
        this.rewindtween.kill();
      }

      this.forwardtween = gsap.to(this.tween, {
        timeScale: scrollTop ? 1 + speed : 1,
        duration: 0.75,
      });
    }

    clearTimeout(this.timeoutId);

    // Set a new timeout to reset the animation after 3 seconds of inactivity
    this.timeoutId = setTimeout(() => this.resetAnimation());

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // this.scrollTimeout = setTimeout(() => {
    //   this.tween.timeScale(1); // Reset speed after scrolling stops
    // }, 200);
    // console.log(this.lastScrollTop);
    // const scrollTop =
    //   window.pageYOffset ||
    //   document.documentElement.scrollTop ||
    //   document.body.scrollTop ||
    //   0;
    // const scrollText = document.querySelector("#name") as HTMLElement;
    // const textWidth = scrollText!.offsetWidth;
    // const containerWidth = window.innerWidth;
    // const style = window.getComputedStyle(scrollText);
    // const matrix = style.transform || style.webkitTransform;
    // const matrixValues = matrix.match(/matrix.*\((.+)\)/);
    // let x = 0;
    // let y = 0;
    // if (matrixValues) {
    //   const values = matrixValues[1].split(", ").map(parseFloat);
    //   // Check for 3D transformation matrix
    //   if (values.length === 16) {
    //     x = values[12];
    //     console.log({
    //       x: values[12],
    //       y: values[13],
    //       z: values[14],
    //     });
    //   }
    //   // Check for 2D transformation matrix (in case translate3d is not used)
    //   else if (values.length === 6) {
    //     x = values[4];
    //     console.log({
    //       x: values[4],
    //       y: values[5],
    //       z: 0,
    //     });
    //   }
    // }
    // scrollText.style.transform = `translate3d(${x - 100}px, 0px, 0px)`;
    // gsap.to("#name", {
    //   x: x - 50,
    //   duration: 20, // Adjust the duration as needed
    //   ease: "none",
    // });
    // if (scrollTop > this.lastScrollTop) {
    //   const test = gsap.to("#name", {
    //     x: "-50%",
    //     duration: this.duration, // Adjust the duration as needed
    //     repeat: -1,
    //     ease: "none",
    //   });
    // } else {
    //   gsap.to("#name", {
    //     x: "-50%",
    //     duration: this.duration, // Adjust the duration as needed
    //     repeat: -1,
    //     ease: "none",
    //   });
    // }
    // this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      this.animateTicker();
    }, 5000); // 2000 milliseconds = 2 seconds
  }

  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  animateTicker(): void {
    this.currentTicker++;
    if (this.currentTicker > 3) {
      this.currentTicker = 0;
    }

    const test = document.getElementById("ticker-value");
    const test2 = document.getElementById("ticker-label");
    test?.classList.remove("animate-in");
    test?.classList.add("animate-out");
    test2?.classList.remove("animate-in");
    test2?.classList.add("animate-out");

    setTimeout(() => {
      test!.innerText = this.ticker[this.currentTicker].value;
      test2!.innerText = this.ticker[this.currentTicker].label;
      test?.classList.remove("animate-out");
      test?.classList.add("animate-in");
      test2?.classList.remove("animate-out");
      test2?.classList.add("animate-in");
    }, 500);
  }
}
