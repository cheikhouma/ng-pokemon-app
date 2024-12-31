import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//Une directive est une classe Angular marquée avec un décorateur @Directive. 
// Elle permet d'attacher un comportement personnalisé à un élément HTML
// Ca ressemble a un component mais can'a pas de template

// Les 3 types de directives:
  // 1 - component
  // 2- d'attributs : agir sur les attributs des elements html
  // 3- Structurellees: comme les *ngif et *ngfor 
//  Pour creer une directive ng generate directive [directiveName]

@Directive({
    // pour les diretives on met des [] et pour component il n'y a pas
    selector: '[pkmnBorderCard]',
    standalone: false
})
export class BorderCardDirective {


  private intialColor:string = '#f5f5f5';
  private defaultColor:string ='#009688';
  private defaultHeight:number = 190;


  constructor(private el: ElementRef) {
    this.setBorder(this.intialColor);
    this.setHeight(this.defaultHeight);
   }

   

   @Input('pkmnBorderCard') borderColor: string; // avec alias
  // @Input() pkmnBorderCard :string; // sans alias
  
  // Faut juste penser a inclure le nom de la directive juste apres @Input et suivi de l'argument 
   

    
   @HostListener('mouseenter') onMouseEnter() { // Pour le hover
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() { // Que quand on quitte
    this.setBorder(this.intialColor); 
   }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color:string){
    this.el.nativeElement.style.border= `solid 5px ${color}`;
  }
}

//  @HostListener c'est une methode d'une directive a un element donner

// @Input c'est pour avoir une entree