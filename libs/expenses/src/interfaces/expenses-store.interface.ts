export interface ExpensesProps {
  filters: ExpensesFilters;
}

export interface ExpensesFilters {
  fromDate?: string;
  toDate?: string;
}
