import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExpenseItemComponent } from './expense-item.component';
import { EditExpenseModule } from '../edit-expense/edit-expense.module';

@NgModule({
  imports: [CommonModule, EditExpenseModule, IonicModule],
  declarations: [ExpenseItemComponent],
  exports: [ExpenseItemComponent],
})
export class ExpenseItemModule {}
