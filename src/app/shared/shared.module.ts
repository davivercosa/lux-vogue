import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TopbarComponent } from './components/topbar/topbar.component';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [TopbarComponent],
})
export class SharedModule {}
