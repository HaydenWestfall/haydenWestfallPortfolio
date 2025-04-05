import { inject, Injectable } from "@angular/core";
import { CanActivate, NavigationStart, Router } from "@angular/router";
import { delay, Observable, of } from "rxjs";
import { ThemeService } from "../services/theme.service";

@Injectable({
  providedIn: "root",
})
export class DelayGuard implements CanActivate {
  private readonly _router = inject(Router);
  private readonly _service = inject(ThemeService);

  constructor() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._service.isPopState = event.navigationTrigger === "popstate";
      }
    });
  }

  canActivate(): Observable<boolean> {
    if (this._service.isPopState || this._service.isInitialLoad) {
      // Allow immediate navigation for popstate (back/forward button)
      return of(true);
    }

    // Delay navigation for programmatic triggers
    return of(true).pipe(delay(1000));
  }
}
