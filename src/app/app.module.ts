import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { ParallaxButtonDirective } from "./parallax-button.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    WorkComponent,
    ContactComponent,
    SvgIconComponent,
    ParallaxButtonDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
