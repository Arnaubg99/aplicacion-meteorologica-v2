import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesCieloService } from '../../../servicios/imagenes-cielo/imagenes-cielo.service';
import { Pronostico } from '../../../interfaces/pronostico';
import { ImagenErrorDirective } from '../../../directivas/imagen-error.directive';

@Component({
  selector: 'tabla-pronosticos',
  standalone: true,
  imports: [CommonModule, ImagenErrorDirective],
  templateUrl: './tabla-pronosticos.component.html',
  styleUrl: './tabla-pronosticos.component.css'
})
export class TablaPronosticosComponent {
  readonly ImagenesCieloService: ImagenesCieloService = inject(ImagenesCieloService);

  @Input() pronostico!: Pronostico;

}
