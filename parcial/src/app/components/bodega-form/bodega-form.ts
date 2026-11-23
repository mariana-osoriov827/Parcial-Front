import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodegaService } from '../../services/bodega.service';
import { Bodega } from '../../models/bodega.model';

@Component({
  selector: 'app-bodega-form',
  imports: [FormsModule],
  templateUrl: './bodega-form.html',
  styleUrl: './bodega-form.css',
})
export class BodegaFormComponent {
  private bodegaService = inject(BodegaService);
  @Output() bodegaCreada = new EventEmitter<void>();

  bodega: Bodega = { nombre: '', ubicacion: '' };
  mensaje = signal('');
  esError = signal(false);

  guardar() {
    if (!this.bodega.nombre.trim() || !this.bodega.ubicacion.trim()) {
      this.esError.set(true);
      this.mensaje.set('Completa nombre y ubicación.');
      return;
    }

    this.bodegaService.crear(this.bodega).subscribe({
      next: () => {
        this.bodega = { nombre: '', ubicacion: '' };
        this.esError.set(false);
        this.mensaje.set('Bodega registrada correctamente.');
        this.bodegaCreada.emit();
      },
      error: () => {
        this.esError.set(true);
        this.mensaje.set('No se pudo registrar la bodega.');
      },
    });
  }
}
