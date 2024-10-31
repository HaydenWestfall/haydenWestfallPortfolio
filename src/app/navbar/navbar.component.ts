import { Component, HostListener, inject, Input, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  router = inject(Router);
  showNav = false;
  showSlideInPanel = false;
  navbarClass = "";
  transparentMode = "";
  selectedLink = "";

  navbarLinks = [
    { id: "home", label: "Home", route: "/" },
    { id: "about", label: "About", route: "/about" },
    { id: "work", label: "Work", route: "/work", count: 6 },
    { id: "contact", label: "Contact", route: "/contact" },
  ];

  socials = [
    { id: "linkedIn", label: "Linked In", link: "https://www.linkedin.com/in/haydenwestfall/" },
    { id: "gitHub", label: "GitHub", link: "https://github.com/HaydenWestfall" },
    { id: "instagram", label: "Instagram", link: "https://www.instagram.com/haydenwestfall12667/" },
    { id: "resume", label: "Resume", link: "/assets/hayden_westfall_resume.pdf" },
  ];

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event["url"];
        setTimeout(() => {
          this.transparentMode = [
            "/",
            "/contact",
            "/work/gearHead",
            "/work/maddieWestEvents",
            "/work/tradeWave",
            "/work/stf",
            "/work/fireshare",
            "/work/missLisaBooks",
          ].includes(url)
            ? "transparent-white"
            : "transparent-black";
          this.navbarClass = this.navbarStyleSelector();
        }, 600);
      }
    });
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event: any) {
    this.navbarClass = this.navbarStyleSelector();
  }

  mouseEnterNavbar(): void {
    this.navbarClass = "white-navbar";
  }

  mouseLeaveNavbar(): void {
    this.navbarClass = this.selectedLink == null ? this.navbarStyleSelector() : "white-navbar";
  }

  navbarStyleSelector(): string {
    if (typeof window === "undefined") {
      return "";
    }
    return window.scrollY < 70 ? "clear-navbar" : "white-navbar";
  }

  hideSlideInPanel(): void {
    setTimeout(() => {
      this.showSlideInPanel = false;
    }, 1000);
  }
}
