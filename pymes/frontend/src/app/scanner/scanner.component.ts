import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [ZXingScannerModule, CommonModule],
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  scannedResult: string = '';
  allowedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_128];

  constructor(private productoService: ProductoService) {}

  onCodeResult(resultString: string) {
    if (resultString !== this.scannedResult) {
      this.scannedResult = resultString;
      console.log('Código escaneado:', resultString);

      this.productoService.buscarPorCodigo(resultString).subscribe({
        next: (producto) => {
          console.log('✅ Producto encontrado:', producto);
          // Acá podrías mostrarlo o navegar
        },
        error: (err) => {
          console.log('❌ Producto no encontrado. Mostrar formulario.');
          // Acá mostrarías el formulario de creación
        }
      });
    }
  }
}
