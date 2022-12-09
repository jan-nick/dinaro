import { Component, EventEmitter, Input } from '@angular/core';
import { Expense } from '@dinaro/expenses';
import { ModalController } from '@ionic/angular';
import { first, merge } from 'rxjs';
import { EditExpenseComponent } from '../edit-expense/edit-expense.component';

@Component({
  selector: 'dinaro-expense-item',
  templateUrl: 'expense-item.component.html',
  styleUrls: ['expense-item.component.scss'],
})
export class ExpenseItemComponent {
  @Input() expense: Expense | null | undefined;
  @Input() loading = false;

  constructor(private readonly modalController: ModalController) {}

  async presentEditExpenseModal() {
    const didSubmit = new EventEmitter<Expense>();
    const willDelete = new EventEmitter<Expense>();
    merge(didSubmit, willDelete)
      .pipe(first())
      .subscribe(() => this.modalController.dismiss());

    const modal = await this.modalController.create({
      component: EditExpenseComponent,
      componentProps: {
        expense: this.expense,
        didSubmit,
        willDelete,
      },
      initialBreakpoint: 1,
      breakpoints: [0, 1],
      cssClass: ['auto-height-modal'],
    });

    await modal.present();
  }
}
