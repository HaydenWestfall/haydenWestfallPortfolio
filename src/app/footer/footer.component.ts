import { AfterViewInit, ChangeDetectorRef, Component, HostListener, inject, OnInit } from "@angular/core";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { gsap, Power2 } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent implements AfterViewInit {
  router = inject(Router);
  cd = inject(ChangeDetectorRef);
  hideFooter = false;
  showContactButton = true;
  contactButtonAnimation: any = null;
  footerCategories = [
    {
      label: "SITEMAP",
      type: "routerLinks",
      links: [
        { label: "HOME", link: "/" },
        { label: "ABOUT", link: "/about" },
        { label: "WORK", link: "/work" },
        { label: "CONTACT", link: "/contact" },
      ],
    },
    {
      label: "SOCIALS",
      type: "external-links",
      links: [
        {
          label: "LINKED IN",
          link: "https://www.linkedin.com/in/haydenwestfall/",
        },
        {
          label: "GITHUB",
          link: "https://github.com/HaydenWestfall",
        },
        {
          label: "INSTAGRAM",
          link: "https://www.instagram.com/haydenwestfall12667/",
        },
      ],
    },
    {
      label: "RESUME",
      type: "external-links",
      links: [
        {
          label: "VIEW RESUME",
          link: "/assets/hayden_westfall_resume.pdf",
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Wait for cover animation to cover screen befor removing button from dom
        setTimeout(() => {
          if (event.url === "/contact") {
            this.showContactButton = false;
            this.cd.detectChanges();
            this.killAnimation();
          } else {
            this.showContactButton = true;
            this.cd.detectChanges();
            if (window.innerWidth >= 768) {
              this.initAnimation();
            }
          }
        }, 1000);
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideFooter = window.scrollY ? true : false;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    if (window.innerWidth < 768) {
      this.killAnimation();
    } else {
      this.initAnimation();
    }
  }

  initAnimation() {
    const element = document.getElementById("contact-btn-footer");
    this.contactButtonAnimation = gsap.fromTo(
      element,
      { y: 200, x: -200 },
      {
        y: 0,
        x: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }

  killAnimation(): void {
    if (this.contactButtonAnimation) {
      this.contactButtonAnimation.kill();
      this.contactButtonAnimation = null;
    }
  }

  backToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
