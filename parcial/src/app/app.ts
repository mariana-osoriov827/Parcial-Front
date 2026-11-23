import { Component } from '@angular/core';
import { BodegaFormComponent } from './components/bodega-form/bodega-form';
import { ProductoTableComponent } from './components/producto-table/producto-table';

@Component({
  selector: 'app-root',
  imports: [BodegaFormComponent, ProductoTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
