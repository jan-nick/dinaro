import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddExpenseComponent } from './add-expense.component';
import { ExpenseItemModule } from '../expense-item/expense-item.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ExpenseItemModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [AddExpenseComponent],
  exports: [AddExpenseComponent],
})
export class AddExpenseModule {}
