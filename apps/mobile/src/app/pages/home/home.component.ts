import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense, filteredExpenses$ } from '@dinaro/expenses';

@Component({
  selector: 'dinaro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly expenses$: Observable<Expense[]> = filteredExpenses$;

  readonly totalExpenses$: Observable<number> = this.expenses$.pipe(
    map((expenses) =>
      expenses.reduce((previous, { amount }) => (previous += amount), 0)
    )
  );
}
