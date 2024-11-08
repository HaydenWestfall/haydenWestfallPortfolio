import { AfterViewInit, Component, HostListener, inject, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);
  rollingTextIndex = 0;
  rollingTextLabels = [
    "FULL STACK DEVELOPER",
    "UI/UX DESIGNER",
    "DEVOPS ENGINEER",
    "PROJECT LEAD",
    "SCRUM MASTER",
    "SOFTWARE ENGINEER",
  ];
  mediaQueryMatch = false;
  locationText = "BASED IN OHIO";
  rollingText = "SOFTWARE ENGINEER";
  totalImages = 3; // Only count the original images (not the duplicate)
  imageRotateTimeline: TimelineMax = null as any;
  scrollTimeline = gsap.timeline({});
  intervalId: any = null;
  direction = -1;
  animationFrameId: number = 0;
  rotatePos = 0;

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
      position: "Associate SE | Intern",
      location: "Northrop Grumman",
      timeframe: "2018 - 2020",
    },
    {
      position: "Student | CS/BS",
      location: "Wright State University",
      timeframe: "2017 - 2019",
    },
  ];

  technologies = [
    {
      label: "PROFESSIONAL WITH THESE",
      technologies: [] as any,
      technologiesDesktop: [
        [
          { name: "SPRING", icon: "../../assets/icons/spring.svg" },
          { name: "DOCKER", icon: "../../assets/icons/docker.svg" },
          { name: "KUBERNETES", icon: "../../assets/icons/kubernetes.svg" },
        ],
        [
          { name: "AMAZON", icon: "../../assets/icons/aws.svg" },
          { name: "GITLAB", icon: "../../assets/icons/gitlab.svg" },
          { name: "JAVASCRIPT", icon: "../../assets/icons/javascript.svg" },
        ],
        [
          { name: "ANGULAR", icon: "../../assets/icons/angular.svg" },
          { name: "MAVEN", icon: "../../assets/icons/maven.svg" },
          { name: "MONGO", icon: "../../assets/icons/mongodb.svg" },
        ],
        [
          { name: "OPENAPI", icon: "../../assets/icons/openapi.svg" },
          { name: "SCSS", icon: "../../assets/icons/scss.svg" },
          { name: "HTML", icon: "../../assets/icons/html.svg" },
        ],
      ],
      technologiesMobile: [
        [
          { name: "SPRING", icon: "../../assets/icons/spring.svg" },
          { name: "DOCKER", icon: "../../assets/icons/docker.svg" },
        ],
        [
          { name: "AMAZON", icon: "../../assets/icons/aws.svg" },
          { name: "GITLAB", icon: "../../assets/icons/gitlab.svg" },
        ],
        [
          { name: "KUBERNETES", icon: "../../assets/icons/kubernetes.svg" },
          { name: "JAVASCRIPT", icon: "../../assets/icons/javascript.svg" },
        ],
        [
          { name: "ANGULAR", icon: "../../assets/icons/angular.svg" },
          { name: "MAVEN", icon: "../../assets/icons/maven.svg" },
        ],
        [
          { name: "OPENAPI", icon: "../../assets/icons/openapi.svg" },
          { name: "SCSS", icon: "../../assets/icons/scss.svg" },
        ],
        [
          { name: "MONGO", icon: "../../assets/icons/mongodb.svg" },
          { name: "HTML", icon: "../../assets/icons/html.svg" },
        ],
      ],
    },
    {
      label: "KNOW ENOUGH TO BE DANGEROUS",
      technologies: [] as any,
      technologiesDesktop: [
        [
          { name: "REACT", icon: "../../assets/icons/openapi.svg" },
          { name: "SVN", icon: "../../assets/icons/docker.svg" },
          { name: "SQL", icon: "../../assets/icons/gitlab.svg" },
        ],
        [
          { name: "PL/SQL", icon: "../../assets/icons/maven.svg" },
          { name: "C++", icon: "../../assets/icons/mongodb.svg" },
          { name: "JENKINS", icon: "../../assets/icons/aws.svg" },
        ],
      ],
      technologiesMobile: [
        [
          { name: "REACT", icon: "../../assets/icons/openapi.svg" },
          { name: "SVN", icon: "../../assets/icons/docker.svg" },
        ],
        [
          { name: "PL/SQL", icon: "../../assets/icons/maven.svg" },
          { name: "C++", icon: "../../assets/icons/mongodb.svg" },
        ],
        [
          { name: "SQL", icon: "../../assets/icons/gitlab.svg" },
          { name: "JENKINS", icon: "../../assets/icons/aws.svg" },
        ],
      ],
    },
  ];

  certifications = [
    {
      name: "CERTIFIED SCRUM MASTER",
      image: "../../assets/accolades/csm.png",
      description:
        "My Scrum Master certification strengthens my skills in agile project management, enabling me to enhance team collaboration, streamline workflows, and drive efficient, high-quality results.",
      expiration: "LIFETIME",
    },
    {
      name: "TS/SCI SECURITY CLEARENCE",
      image: "../../assets/accolades/security-clearence.png",
      description:
        "Holding a TS/SCI clearance has enabled me to work on secure, high-level projects to better understand requirements and perform deployments.",
      expiration: "2024 - 2029",
    },
    {
      name: "AWS CERTIFIED DEVELOPER",
      image: "../../assets/accolades/aws.png",
      description:
        "My AWS Developer certificate gave me the foundational knowledge I needed to contribute to cloud deployments through Kubernetes.",
      expiration: "2024",
    },
  ];

  ngOnInit(): void {
    this.mediaQueryMatch = window.innerWidth <= 768;
    this.swapTechnologyStack();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeAbout();
    }, 1000);
  }

  initializeAbout(): void {
    this.themeService.theme = "dark";
    this.scrollTimeline.to(document.getElementById("micro-animation-wrapper"), {
      scrollTrigger: {
        trigger: document.getElementById("micro-animation-wrapper"),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      rotate: "-100px",
    });
    this.animationFrameId = requestAnimationFrame(this.animate);

    const logoWrappers = document.querySelectorAll(".technology-row");
    logoWrappers.forEach((wrapper, index) => {
      Array.from(wrapper.children).forEach((child) => {
        this.scrollTimeline.fromTo(
          child,
          {
            y: 6 * (index + 1) + "rem",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: wrapper, // Trigger the animation based on this selector
              start: "top bottom", // Start the animation when the top of ".animate-me" hits 80% of the viewport height
              end: "top 50%", // End the animation when the top hits 30% of the viewport height
              scrub: 1, // Smooth scrubbing
              once: true,
            },
          }
        );
      });
    });

    const accoladeWrappers = document.querySelectorAll(".accolade");
    accoladeWrappers.forEach((elements) => {
      this.scrollTimeline.fromTo(
        elements,
        {
          y: 5 + "rem",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: elements, // Trigger the animation based on this selector
            start: "top bottom", // Start the animation when the top of ".animate-me" hits 80% of the viewport height
            end: "top 70%", // End the animation when the top hits 30% of the viewport height
            scrub: 1, // Smooth scrubbing
            once: true,
          },
        }
      );
    });

    this.scrollTimeline.fromTo(
      "#about-headshot",
      { y: "-30%" },
      {
        y: "0",
        scrollTrigger: {
          trigger: "#image-wrapper",
          start: "top bottom",
          scrub: true,
          markers: false,
        },
      }
    );
    this.scrollTimeline.to("#spark", {
      scale: "1.2",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    this.initRollingText();
    this.setupImageRotationTimeline();
  }

  initRollingText(): void {
    this.intervalId = setInterval(() => {
      const cursor = document.getElementById("rolling-text-cursor");
      cursor?.classList.add("blink-cursor");
      this.deleteRollingText();
      cursor?.classList.remove("blink-cursor");
    }, 7500);
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

  addRollingText(): void {
    let index = 0;
    let intervalId = setInterval(() => {
      const cursor = document.getElementById("rolling-text-cursor");
      index = index + 1;

      console.log(index);

      this.rollingText = this.rollingText + this.rollingTextLabels[this.rollingTextIndex][index - 1];
      if (index === this.rollingTextLabels[this.rollingTextIndex].length) {
        clearInterval(intervalId);
        cursor?.classList.add("blink-cursor");
        this.rollingTextIndex = this.rollingTextIndex === 5 ? 0 : this.rollingTextIndex + 1;
      }
    }, 150);
  }

  animate = () => {
    gsap.set(document.getElementById("micro-animation"), { rotate: this.rotatePos });
    this.animationFrameId = requestAnimationFrame(this.animate);
    this.rotatePos += 0.2;
  };

  setupImageRotationTimeline() {
    this.imageRotateTimeline = gsap.timeline({
      repeat: -1, // Infinite loop
    });

    this.imageRotateTimeline.to(".life-images", {
      x: "0%",
      duration: 0,
      ease: "none",
    });

    // Create an animation for each image slide
    for (let i = 1; i <= this.totalImages; i++) {
      this.imageRotateTimeline.to(
        ".life-images",
        {
          x: `-${i * 100}%`,
          duration: 1,
          ease: "power2.inOut",
        },
        "+=3.5"
      ); // Hold each image for 4 seconds before sliding to the next
    }

    this.imageRotateTimeline.play();
  }

  swapTechnologyStack(): void {
    this.technologies.forEach((technologySet) => {
      technologySet.technologies = this.mediaQueryMatch
        ? technologySet.technologiesMobile
        : technologySet.technologiesDesktop;
    });

    this.locationText = this.mediaQueryMatch ? "IN OHIO" : "BASED IN OHIO";
  }

  @HostListener("window:resize", [])
  onResize() {
    if (!this.mediaQueryMatch && window.innerWidth <= 768) {
      this.mediaQueryMatch = true;
      this.swapTechnologyStack();
    } else if (this.mediaQueryMatch && window.innerWidth > 768) {
      this.mediaQueryMatch = false;
      this.swapTechnologyStack();
    }
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      clearInterval(this.intervalId);
      cancelAnimationFrame(this.animationFrameId);

      if (this.scrollTimeline) {
        this.scrollTimeline.kill();
      }
      if (this.imageRotateTimeline) {
        this.imageRotateTimeline.kill();
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        const element = trigger.vars.trigger; // Get the trigger element
        if (element instanceof HTMLElement && element.id == "contact-btn-footer") {
          return;
        }
        trigger.vars;
        trigger.kill();
      });
    }, 750);
  }
}
