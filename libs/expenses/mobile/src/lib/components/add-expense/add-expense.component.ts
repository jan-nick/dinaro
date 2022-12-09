import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addExpense, Expense } from '@dinaro/expenses';
import { formatISO } from 'date-fns';
import * as cuid from 'cuid';

@Component({
  selector: 'dinaro-add-expense',
  templateUrl: 'add-expense.component.html',
  styleUrls: ['add-expense.component.scss'],
})
export class AddExpenseComponent {
  @Output() readonly didSubmit = new EventEmitter<Expense>();

  readonly formGroup = new FormGroup({
    amount: new FormControl(null, Validators.required),
    date: new FormControl(formatISO(new Date()), Validators.required),
    description: new FormControl(),
  });

  submit() {
    const { amount, date, description } = this.formGroup.value;
    if (!amount || !date || !description) return;

    const expense: Expense = {
      id: cuid(),
      createdAt: formatISO(new Date()),
      amount,
      date,
      description,
    };

    if (this.formGroup.valid) {
      addExpense(expense);
    }

    this.didSubmit.emit(expense);
  }
}
