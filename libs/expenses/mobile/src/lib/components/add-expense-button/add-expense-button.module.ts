import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddExpenseButtonComponent } from './add-expense-button.component';
import { ExpenseItemModule } from '../expense-item/expense-item.module';
import { AddExpenseModule } from '../add-expense/add-expense.module';

@NgModule({
  imports: [AddExpenseModule, CommonModule, ExpenseItemModule, IonicModule],
  declarations: [AddExpenseButtonComponent],
  exports: [AddExpenseButtonComponent],
})
export class AddExpenseButtonModule {}
