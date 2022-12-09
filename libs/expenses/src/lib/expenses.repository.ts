import { createStore, setProp, withProps } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  setEntities,
  addEntities,
  updateEntities,
  deleteEntities,
  withActiveId,
  setActiveId,
} from '@ngneat/elf-entities';
import { persistState } from '@ngneat/elf-persist-state';
import { compareDesc } from 'date-fns';
import * as localforage from 'localforage';
import { map, shareReplay, switchMap } from 'rxjs';

import { Expense } from '../interfaces/expense.interface';
import {
  ExpensesFilters,
  ExpensesProps,
} from '../interfaces/expenses-store.interface';
import { filterExpense } from './expenses-filter';

export const expensesStoreName = 'expenses';

export const expensesStore = createStore(
  { name: expensesStoreName },
  withProps<ExpensesProps>({ filters: {} }),
  withEntities<Expense>(),
  withActiveId()
);

localforage.config({ storeName: expensesStoreName });

export const persist = persistState(expensesStore, {
  key: expensesStoreName,
  storage: localforage,
});

export const expenses$ = expensesStore.pipe(
  selectAllEntities(),
  map((entities) =>
    entities.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  ),
  shareReplay(1)
);

export const expensesFilters$ = expensesStore.pipe(
  map(({ filters }) => filters),
  shareReplay(1)
);

export const filteredExpenses$ = expensesFilters$.pipe(
  switchMap((filters) =>
    expenses$.pipe(
      map((expenses) => {
        return expenses.filter((expense) => filterExpense(expense, filters));
      })
    )
  ),
  shareReplay(1)
);

export function setExpenses(expenses: Expense[]) {
  expensesStore.update(setEntities(expenses));
}

export function addExpense(expense: Expense) {
  expensesStore.update(addEntities(expense));
}

export function updateExpense(id: Expense['id'], expense: Partial<Expense>) {
  expensesStore.update(updateEntities(id, expense));
}

export function deleteExpense(id: Expense['id']) {
  expensesStore.update(deleteEntities(id));
}

export function setActiveExpensesId(id: Expense['id']) {
  expensesStore.update(setActiveId(id));
}

export function updateExpenseFilters(
  expenseFilters: Partial<ExpensesFilters> | null
) {
  const { filters } = expensesStore.state;
  expensesStore.update(
    setProp('filters', expenseFilters ? { ...filters, ...expenseFilters } : {})
  );
}
