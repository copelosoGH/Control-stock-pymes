import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ProductoFormComponent {
  @Input() codigoQR: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.form = this.fb.group({
      nombre: [''],
      categoria: [''],
      color: [''],
      talle: [''],
      stockActual: [1]
    });
  }

  guardar() {
    const nuevoProducto = {
      ...this.form.value,
      codigoQR: this.codigoQR
    };

    this.productoService.crearProducto(nuevoProducto).subscribe(() => {
      alert('Producto creado');
      this.form.reset();
    });
  }
}
