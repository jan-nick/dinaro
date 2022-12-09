import { Component } from '@angular/core';
import {
  ExpensesFilters,
  expensesFilters$,
  updateExpenseFilters,
} from '@dinaro/expenses';
import { map } from 'rxjs';

@Component({
  selector: 'dinaro-expenses-filter',
  templateUrl: 'expenses-filter.component.html',
  styleUrls: ['expenses-filter.component.scss'],
})
export class ExpensesFilterComponent {
  readonly filters$ = expensesFilters$;

  readonly hasFilter$ = expensesFilters$.pipe(
    map((filters) => Object.values(filters).some((filter) => filter))
  );

  filterExpanded = false;

  toggle() {
    this.filterExpanded = !this.filterExpanded;
  }

  removeFilter(filter: keyof ExpensesFilters) {
    updateExpenseFilters({ [filter]: undefined });
  }

  removeAllFilters() {
    updateExpenseFilters(null);
  }

  onFromDateChange($event: Event) {
    const fromDate = (<CustomEvent<{ value: string }>>$event).detail.value;
    updateExpenseFilters({ fromDate });
  }

  onToDateChange($event: Event) {
    const toDate = (<CustomEvent<{ value: string }>>$event).detail.value;
    updateExpenseFilters({ toDate });
  }
}
