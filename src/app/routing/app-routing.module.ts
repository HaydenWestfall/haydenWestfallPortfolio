import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { WorksComponent } from "../works/works.component";
import { FreelanceComponent } from "../freelance/freelance.component";
import { ContactComponent } from "../contact/contact.component";
import { DelayGuard } from "./delay.guard";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
};

export const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [DelayGuard], data: { animation: "Route1Page" } },
  { path: "about", component: AboutComponent, canActivate: [DelayGuard], data: { animation: "Route2Page" } },
  { path: "work", component: WorksComponent, canActivate: [DelayGuard], data: { animation: "Route3Page" } },
  {
    path: "work/:projectId",
    component: FreelanceComponent,
    canActivate: [DelayGuard],
    data: { animation: "Route4Page" },
  },
  { path: "contact", component: ContactComponent, canActivate: [DelayGuard], data: { animation: "Route5Page" } },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
      scrollPositionRestoration: "disabled", // Always scroll to the top
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
