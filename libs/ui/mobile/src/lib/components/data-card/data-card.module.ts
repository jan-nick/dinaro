import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataCardComponent } from './data-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [DataCardComponent],
  exports: [DataCardComponent],
})
export class DataCardModule {}
