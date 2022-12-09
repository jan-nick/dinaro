import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  addExpense,
  deleteExpense,
  Expense,
  updateExpense,
} from '@dinaro/expenses';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'dinaro-edit-expense',
  templateUrl: 'edit-expense.component.html',
  styleUrls: ['edit-expense.component.scss'],
})
export class EditExpenseComponent implements OnInit {
  @Input() expense!: Expense;
  @Output() readonly didSubmit = new EventEmitter<Expense>();
  @Output() readonly willDelete = new EventEmitter<Expense>();

  readonly formGroup = new FormGroup({
    amount: new FormControl<number | null>(null, Validators.required),
    date: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
  });

  constructor(private readonly toastController: ToastController) {}

  ngOnInit() {
    this.formGroup.patchValue({
      amount: this.expense.amount,
      date: this.expense.date,
      description: this.expense.description,
    });
  }

  submit() {
    const { amount, date, description } = this.formGroup.value;
    if (!amount || !date || !description) return;

    const expense: Partial<Expense> = {
      amount,
      date,
      description,
    };

    if (this.formGroup.dirty && this.formGroup.valid) {
      updateExpense(this.expense.id, expense);
    }

    this.didSubmit.emit(this.expense);
  }

  deleteExpense() {
    this.willDelete.emit();

    deleteExpense(this.expense.id);

    this.presentExpenseDeletedToast();
  }

  async presentExpenseDeletedToast() {
    const toast = await this.toastController.create({
      header: 'Expense deleted',
      duration: 5000,
      buttons: [
        {
          handler: () => addExpense(this.expense),
          text: 'Undo',
        },
      ],
    });

    await toast.present();
  }
}
