import { Component, OnInit, inject, signal } from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Bodega } from '../../models/bodega.model';

@Component({
  selector: 'app-producto-table',
  templateUrl: './producto-table.html',
  styleUrl: './producto-table.css',
})
export class ProductoTableComponent implements OnInit {
  private bodegaService = inject(BodegaService);
  bodegas = signal<Bodega[]>([]);

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.bodegaService.listar().subscribe((data) => {
      this.bodegas.set(data);
    });
  }
}
