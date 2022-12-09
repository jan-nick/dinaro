import { Directive, ElementRef } from '@angular/core';
import autoAnimate from '@formkit/auto-animate';

@Directive({
  selector: '[dinaroAutoAnimate]',
})
export class AutoAnimateDirective {
  constructor(private readonly elementRef: ElementRef) {
    autoAnimate(elementRef.nativeElement, {});
  }
}
