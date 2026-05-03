import { Directive, HostListener, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[navigate]',
})
export class Navigate {

  readonly #router = inject(Router);

  navigate = input.required<string[]>();

  @HostListener('click')
  navigateTo() {
    console.log('mouse event');
    this.#router.navigate(this.navigate());
  }
}
