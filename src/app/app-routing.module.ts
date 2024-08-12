import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsTwoComponent } from "./projects-two/projects-two.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "Route1Page" } },
  { path: "about", component: AboutComponent, data: { animation: "Route2Page" } },
  { path: "work", component: ProjectsTwoComponent, data: { animation: "Route3Page" } },
  { path: "contact", component: ContactComponent, data: { animation: "Route4Page" } },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
