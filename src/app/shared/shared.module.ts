import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DaviComponent } from './components/davi/davi.component';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [TopbarComponent, FooterComponent, DaviComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [TopbarComponent, FooterComponent, DaviComponent],
})
export class SharedModule {}
