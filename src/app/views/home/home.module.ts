import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MegaMenuModule } from 'primeng/megamenu';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { InputTextModule } from 'primeng/inputtext';

import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MegaMenuModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    DividerModule,
    RatingModule,
    InputTextModule,
  ],
})
export class HomeModule {}
