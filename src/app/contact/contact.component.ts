import { Component, inject, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent implements OnInit {
  themeService = inject(ThemeService);
  userInput = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  ngOnInit(): void {
    this.themeService.theme = "light";
  }
}
