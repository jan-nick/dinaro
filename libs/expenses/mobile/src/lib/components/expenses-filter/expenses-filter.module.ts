import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExpensesFilterComponent } from './expenses-filter.component';
import { ExpenseItemModule } from '../expense-item/expense-item.module';
import { AutoAnimateModule } from '@dinaro/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    AutoAnimateModule,
    CommonModule,
    ExpenseItemModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [ExpensesFilterComponent],
  exports: [ExpensesFilterComponent],
})
export class ExpensesFilterModule {}
