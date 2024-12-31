import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHoverCursor]',
    standalone: false
})
export class HoverCursorDirective {

  constructor(private el: ElementRef) { }

  // Applique un style au survol (hover)
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cursor = 'pointer'; // Change le curseur à une main
  }

  // Réinitialise le style quand la souris quitte l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cursor = 'default'; // Retour au curseur par défaut
  }
}
