import { Component, Input } from '@angular/core';
import { Expense } from '@dinaro/expenses';

@Component({
  selector: 'dinaro-expense-list',
  templateUrl: 'expense-list.component.html',
  styleUrls: ['expense-list.component.scss'],
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] | null | undefined;
  @Input() loading = false;

  readonly skeletonItems = Array(10);
}
