import { Component, inject, Input } from "@angular/core";
import { ThemeService } from "../services/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  navbarLinks = [
    { id: "about", label: "About", route: "/about" },
    { id: "work", label: "Work", route: "/work" },
    { id: "contact", label: "Contact", route: "/contact" },
  ];
}
