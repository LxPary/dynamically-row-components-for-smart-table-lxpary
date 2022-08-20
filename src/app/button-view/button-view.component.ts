import { Component, NgZone, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
})
export class ButtonViewComponent implements ViewCell, OnInit {
  constructor(public zone: NgZone) {}
  @Input() value: string | number;
  @Input() rowData: any;

  procesado: boolean;

  ngOnInit() {
    console.log(this.rowData);
    this.procesado = this.rowData.procesado;
  }

  onClickProcesar(event) {
    console.log(this.rowData);
  }

  onClickDescargar(event) {
    console.log(this.rowData);
  }
}
