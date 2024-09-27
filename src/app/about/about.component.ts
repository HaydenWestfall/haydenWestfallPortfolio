import { AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, ViewChild } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements AfterViewInit {
  themeService = inject(ThemeService);

  workHistory = [
    {
      position: "Software Engineer III",
      location: "Northrop Grumman",
      timeframe: "2024 - Current",
    },
    {
      position: "Software Engineer II",
      location: "Northrop Grumman",
      timeframe: "2022 - 2024",
    },
    {
      position: "Software Engineer I",
      location: "Northrop Grumman",
      timeframe: "2020 - 2022",
    },
    {
      position: "Associate SE (Intern)",
      location: "Northrop Grumman",
      timeframe: "2018 - 2020",
    },
    {
      position: "Student",
      location: "Wright State University",
      timeframe: "2017 - 2019",
    },
  ];

  listItems = [
    {
      title: "Design",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
    {
      title: "Development",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
    {
      title: "Deployment",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
    },
  ];

  accolades = [
    {
      image: "../../assets/accolades/aws.png",
      title: "AWS Certified Developer",
      expiration: "2021-2024",
      description:
        "Acquiring the AWS Developer certificate gave me the foundational knowledge I needed to contribute to cloud deployments through Kubernetes.",
    },
    {
      divider: true,
    },
    {
      image: "../../assets/accolades/security-clearence.png",
      title: "TS/SCI Security Clearence",
      expiration: "2024 - 2029",
      description:
        "Having a Top Secret/SCI security Clearance has allowed me to support customer meetings on site, better understand project requirements, and support project deployments.",
    },
    {
      divider: true,
    },
    {
      image: "../../assets/accolades/csm.png",
      title: "Certified Scrum Master",
      expiration: "Lifetime",
      description:
        "Since earning my Scrum Master certification, I've successfully led agile teams, improved project efficiency, and ensured timely, high-quality delivery on multiple projects.",
    },
  ];

  technologies1 = [
    { name: "SCSS", icon: "../../assets/icons/scss.svg" },
    { name: "SPRING", icon: "../../assets/icons/spring.svg" },
    { name: "KUBERNETES", icon: "../../assets/icons/kubernetes.svg" },
    { name: "ANGULAR", icon: "../../assets/icons/angular.svg" },
    { name: "HTML", icon: "../../assets/icons/html.svg" },
    { name: "JAVASCRIPT", icon: "../../assets/icons/javascript.svg" },
    { name: "SCSS", icon: "../../assets/icons/scss.svg" },
    { name: "SPRING", icon: "../../assets/icons/spring.svg" },
    { name: "KUBERNETES", icon: "../../assets/icons/kubernetes.svg" },
    { name: "ANGULAR", icon: "../../assets/icons/angular.svg" },
    { name: "HTML", icon: "../../assets/icons/html.svg" },
    { name: "JAVASCRIPT", icon: "../../assets/icons/javascript.svg" },
  ];

  technologies2 = [
    { name: "OPENAPI", icon: "../../assets/icons/openapi.svg" },
    { name: "DOCKER", icon: "../../assets/icons/docker.svg" },
    { name: "GITLAB", icon: "../../assets/icons/gitlab.svg" },
    { name: "MAVEN", icon: "../../assets/icons/maven.svg" },
    { name: "MONGO", icon: "../../assets/icons/mongodb.svg" },
    { name: "AMAZON", icon: "../../assets/icons/aws.svg" },
    { name: "OPENAPI", icon: "../../assets/icons/openapi.svg" },
    { name: "DOCKER", icon: "../../assets/icons/docker.svg" },
    { name: "GITLAB", icon: "../../assets/icons/gitlab.svg" },
    { name: "MAVEN", icon: "../../assets/icons/maven.svg" },
    { name: "MONGO", icon: "../../assets/icons/mongodb.svg" },
    { name: "AMAZON", icon: "../../assets/icons/aws.svg" },
  ];

  text = "Hello World";

  lastScrollTop = 0;
  scrollTimeout = null as any;
  hoverIndex: number | null = null;
  private bigNameTween: gsap.core.Tween = null as any;
  private scaleTween: gsap.core.Tween = null as any;
  rewindtween: gsap.core.Tween = null as any;
  forwardtween: gsap.core.Tween = null as any;

  rollingTextIndex = 0;
  rollingTextLabels = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "DEVOPS ENGINEER", "COMMUNICATOR"];
  rollingText = "FULL STACK DEVELOPER";

  animations: gsap.core.Tween[] = [];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.themeService.theme = "dark";

    setTimeout(() => {
      this.animations.push(this.themeService.setupTranslateAnimation("#portfolio1", -300, -100, 0, 0));
      this.animations.push(this.themeService.setupTranslateAnimation("#portfolio2", -100, -300, 0, 0));

      console.log("here animation setup");
      gsap.fromTo(
        "#quote-image-wrapper",
        { width: "50%" },
        {
          width: "80%",
          scrollTrigger: {
            trigger: "#quote-image-wrapper",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "#quote-text",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: "#quote-text",
            start: "top bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "#about-headshot",
        { y: "-20%" },
        {
          y: "0",
          scrollTrigger: {
            trigger: "#about-headshot",
            start: "20% bottom",
            scrub: true,
          },
        }
      );

      this.bigNameTween = gsap.to("#micro-animation", {
        rotate: "100%",
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      const tl = gsap.timeline();

      this.scaleTween = gsap.to("#spark", {
        scale: "1.2",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      let intervalId = setInterval(() => {
        const cursor = document.getElementById("rolling-text-cursor");
        cursor?.classList.add("blink-cursor");
        this.deleteRollingText();
        cursor?.classList.remove("blink-cursor");
      }, 7500);
    });
  }

  addRollingText(): void {
    let index = 0;
    let timeout = 150;
    let intervalId = setInterval(() => {
      setTimeout(() => {
        const cursor = document.getElementById("rolling-text-cursor");
        index = index + 1;
        this.rollingText = this.rollingText + this.rollingTextLabels[this.rollingTextIndex][index - 1];
        if (index === this.rollingTextLabels[this.rollingTextIndex].length) {
          clearInterval(intervalId);
          cursor?.classList.add("blink-cursor");
          this.rollingTextIndex = this.rollingTextIndex === 3 ? 0 : this.rollingTextIndex + 1;
        }
        timeout = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
      }, timeout);
    }, 150);
  }

  deleteRollingText(): void {
    let intervalId = setInterval(() => {
      const stringLength = this.rollingText.length - 1;
      this.rollingText = this.rollingText.slice(0, stringLength) + this.rollingText.slice(stringLength + 1);
      if (stringLength === -1) {
        clearInterval(intervalId);
        this.addRollingText();
      }
    }, 75);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let scrollDiff = Math.abs(scrollTop - this.lastScrollTop);
    scrollDiff = scrollDiff > 100 ? 100 : scrollDiff;
    const animationSpeed = 20 * (scrollDiff / 100);

    if (scrollTop < this.lastScrollTop) {
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

  resetAnimation() {
    gsap.to(this.bigNameTween, {
      timeScale: 1,
      duration: 0.75,
    });
  }
}
