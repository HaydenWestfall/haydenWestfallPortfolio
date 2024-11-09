import { Directive, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { debounceTime, Observable, Subscription } from "rxjs";

@Directive({
  selector: "[appIntersection]",
  exportAs: "intersection",
})
export class IntersectionDirective implements OnInit, OnDestroy {
  @Input() root: HTMLElement | null = null;
  @Input() rootMargin = "0px 0px 0px 0px";
  @Input() threshold = 0.65;
  @Input() debounceTime = 500;
  @Input() isContinuous = false;
  @Input() thresholdOverride = false;

  @Output() isIntersecting = new EventEmitter<boolean>();

  _isIntersecting = false;
  subscription: Subscription | null = null;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.subscription = this.createAndObserve();
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

  createAndObserve() {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.thresholdOverride ? 0 : this.threshold,
    };

    return new Observable<boolean>((subscriber) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        subscriber.next(isIntersecting);

        isIntersecting && !this.isContinuous && intersectionObserver.disconnect();
      }, options);

      intersectionObserver.observe(this.element.nativeElement);

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        },
      };
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe((status) => {
        this.isIntersecting.emit(status);
        this._isIntersecting = status;
      });
  }
}
