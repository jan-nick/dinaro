import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExpenseListComponent } from './expense-list.component';
import { ExpenseItemModule } from '../expense-item/expense-item.module';
import { AutoAnimateModule } from '@dinaro/ui';

@NgModule({
  imports: [AutoAnimateModule, CommonModule, ExpenseItemModule, IonicModule],
  declarations: [ExpenseListComponent],
  exports: [ExpenseListComponent],
})
export class ExpenseListModule {}
