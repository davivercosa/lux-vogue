import { Component } from '@angular/core';

@Component({
  selector: 'app-davi',
  templateUrl: './davi.component.html',
  styleUrl: './davi.component.scss',
})
export class DaviComponent {
  zIndexDavi = false;
  zIndexOverlayDavi = true;

  showDavi() {
    this.zIndexDavi = true;
    this.zIndexOverlayDavi = false;
  }

  hideDavi() {
    this.zIndexDavi = false;
    this.zIndexOverlayDavi = true;
  }
}
