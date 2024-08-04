import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  hideFooter = false;
  links = [
    { label: "LinkedIn", link: "https://www.google.com" },
    { label: "GitHub", link: "https://www.google.com" },
    { label: "Instagram", link: "https://www.google.com" },
    { label: "Resume", link: "https://www.google.com" },
  ];

  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.hideFooter = window.scrollY ? true : false;
  }
}
