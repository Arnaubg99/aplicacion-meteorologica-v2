import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[ErrorEnLaImagen]',
  standalone: true
})
export class ImagenErrorDirective {
  readonly elementoImg:ElementRef = inject(ElementRef);

  @HostListener('error')
  onError():void {
    this.elementoImg.nativeElement.src = './assets/error.png'
  }

}
