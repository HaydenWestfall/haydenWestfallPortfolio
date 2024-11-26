import { AfterViewInit, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { works } from "../works";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  _service = inject(ThemeService);
  initPageSubscription: Subscription = null as any;
  featuredProjects = works.slice(0, 4);

  portfolio1 = [
    {
      img: "/assets/home/innobuild_home.webp",
      bg: "#E2DED7",
    },
    {
      img: "/assets/home/mwe_home.webp",
      bg: "#ECEDF0",
    },
    { img: "../../assets/home/stf_home.webp", bg: "#DAD5D2" },
    { img: "../../assets/home/tradewave_home.webp", bg: "#E4E9EE" },
    {
      img: "/assets/home/fireshare_home.webp",
      bg: "#E2DED7",
    },
    {
      img: "/assets/home/innobuild_home.webp",
      bg: "#ECEDF0",
    },
    { img: "../../assets/home/mwe_home.webp", bg: "#DAD5D2" },
    { img: "../../assets/home/stf_home.webp", bg: "#E4E9EE" },
    {
      img: "/assets/home/tradewave_home.webp",
      bg: "#E2DED7",
    },
    {
      img: "/assets/home/fireshare_home.webp",
      bg: "#ECEDF0",
    },
    { img: "../../assets/home/innobuild_home.webp", bg: "#DAD5D2" },
    { img: "../../assets/home/mwe_home.webp", bg: "#E4E9EE" },
  ];

  portfolio2 = [
    { img: "../../assets/home/tradewave_list.webp", bg: "#DDDDE7" },
    { img: "../../assets/home/stf_auto_insurance.webp", bg: "#D0D8DB" },
    { img: "../../assets/home/mwe_journal.webp", bg: "#A2B0AC" },
    { img: "../../assets/home/mwe_contact.webp", bg: "#E1DDD7" },
    { img: "../../assets/home/fireshare_customers.webp", bg: "#DDDDE7" },
    { img: "../../assets/home/tradewave_list.webp", bg: "#D0D8DB" },
    { img: "../../assets/home/stf_auto_insurance.webp", bg: "#A2B0AC" },
    { img: "../../assets/home/mwe_journal.webp", bg: "#E1DDD7" },
    { img: "../../assets/home/mwe_contact.webp", bg: "#DDDDE7" },
    { img: "../../assets/home/fireshare_customers.webp", bg: "#D0D8DB" },
    { img: "../../assets/home/tradewave_list.webp", bg: "#A2B0AC" },
    { img: "../../assets/home/stf_auto_insurance.webp", bg: "#E1DDD7" },
  ];

  scrollTimeline = gsap.timeline({});
  nameSliderAnimationFrame: number | null = null;
  roleFadeAnimationFrame: number | null = null;
  animations: gsap.core.Tween[] = [];
  direction = -1;
  slider = 0;
  xPos = 0;

  primaryRole: any = {};
  secondaryRole: any = {};

  texts = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "DEVOPS ENGINEER", "FREELANCE DEVELOPER"];

  morphTime = 1.15;
  cooldownTime = 3;

  textIndex = this.texts.length - 1;
  time = new Date();
  morph = 0;
  cooldown = this.cooldownTime;

  ngOnInit(): void {
    this._service.theme = "light";
  }

  ngAfterViewInit(): void {
    this.initPageSubscription = this._service.initPage$.subscribe(() => {
      this.initializeHome();
      if (!this._service.isPopState) {
        setTimeout(() => {
          const duration = 0.6;
          const timeline = gsap.timeline({ delay: 0.32 });
          timeline.from("#name-slider", { y: 250, duration: duration, ease: "circ.out" });
          timeline.from("#roles", { opacity: 0, y: 80, duration: duration, ease: "circ.out" }, `-=${duration}`);
          timeline.from("#hero-contact", { opacity: 0, y: 80, duration: duration, ease: "circ.out" }, `-=${duration}`);
        });
      }
    });
  }

  initializeHome(): void {
    this.nameSliderAnimationFrame = requestAnimationFrame(this.animate);
    this.scrollTimeline.to(document.getElementById("name-slider"), {
      scrollTrigger: {
        trigger: document.getElementById("name-slider"),
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (this.direction = e.direction * -1),
      },
      x: "-500px",
    });

    this.primaryRole = document.getElementById("role-primary");
    this.secondaryRole = document.getElementById("role-secondary");
    this.primaryRole!.textContent = this.texts[this.textIndex % this.texts.length];
    this.secondaryRole!.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
    this.animateText();

    if (window.innerWidth >= 768) {
      this.scrollTimeline.fromTo(
        "#about-btn",
        { y: 350 },
        { y: 0, ease: "power1.out", scrollTrigger: { trigger: "#about-btn", start: "top bottom", scrub: true } }
      );
      this.scrollTimeline.fromTo(
        "#portfolio-1-home",
        { x: -300 },
        { x: -100, scrollTrigger: { trigger: "#portfolio-1-home", start: "top bottom", scrub: true } }
      );
      this.scrollTimeline.fromTo(
        "#portfolio-2-home",
        { x: -100 },
        { x: -300, scrollTrigger: { trigger: "#portfolio-2-home", start: "top bottom", scrub: true } }
      );
      this.scrollTimeline.to("#hero-contact", {
        y: -125,
        scrollTrigger: { trigger: "#hero-contact", start: "top 34%", end: "bottom top", scrub: true },
      });
      this.scrollTimeline.to("#roles", {
        opacity: 0,
        scrollTrigger: { trigger: "#roles", start: "top 19%", end: "bottom top", scrub: true },
      });
    }
  }

  animate = (test?: any) => {
    if (this.xPos < -100) {
      this.xPos = 0;
    } else if (this.xPos > 0) {
      this.xPos = -100;
    }

    gsap.set(document.getElementById("name-primary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("name-secondary"), { xPercent: this.xPos });
    gsap.set(document.getElementById("name-tertiary"), { xPercent: this.xPos });
    this.nameSliderAnimationFrame = requestAnimationFrame(this.animate);
    this.xPos += 0.02;
  };

  ngOnDestroy(): void {
    this.initPageSubscription.unsubscribe();

    cancelAnimationFrame(this.nameSliderAnimationFrame!);
    cancelAnimationFrame(this.roleFadeAnimationFrame!);
    if (this.scrollTimeline) {
      this.scrollTimeline.kill();
    }

    ScrollTrigger.getAll().forEach((trigger) => {
      const element = trigger.vars.trigger; // Get the trigger element
      if (element instanceof HTMLElement && element.id == "contact-btn-footer") {
        return;
      }

      trigger.vars;
      trigger.kill();
    });
  }

  doMorph(): void {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / this.morphTime;

    if (fraction > 1) {
      this.cooldown = this.cooldownTime;
      fraction = 1;
    }

    this.setMorph(fraction);
  }

  setMorph(fraction: any): void {
    this.secondaryRole!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.secondaryRole!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    this.primaryRole!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.primaryRole!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    this.primaryRole!.textContent = this.texts[this.textIndex % this.texts.length];
    this.secondaryRole!.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
  }

  doCooldown(): void {
    this.morph = 0;

    this.secondaryRole!.style.filter = "";
    this.secondaryRole!.style.opacity = "100%";

    this.primaryRole!.style.filter = "";
    this.primaryRole!.style.opacity = "0%";
  }

  animateText = () => {
    this.roleFadeAnimationFrame = requestAnimationFrame(this.animateText);

    let newTime = new Date();
    let shouldIncrementIndex = this.cooldown > 0;
    let dt = (newTime.getTime() - this.time.getTime()) / 1000;
    this.time = newTime;

    this.cooldown -= dt;

    if (this.cooldown <= 0) {
      if (shouldIncrementIndex) {
        this.textIndex++;
      }

      this.doMorph();
    } else {
      this.doCooldown();
    }
  };
}
