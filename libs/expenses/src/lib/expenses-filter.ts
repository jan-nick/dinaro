import { isAfter, isBefore, isWithinInterval } from 'date-fns';
import { Expense } from '../interfaces/expense.interface';
import { ExpensesFilters } from '../interfaces/expenses-store.interface';

export const filterExpense = (
  expense: Expense,
  expensesFilters: ExpensesFilters
) => {
  return filterExpenseByDate(expense.date, expensesFilters);
};

const filterExpenseByDate = (
  date: Expense['date'],
  dateFilter: ExpensesFilters
) => {
  const { fromDate, toDate } = dateFilter;

  if (fromDate && toDate) {
    return isWithinInterval(new Date(date), {
      start: new Date(fromDate),
      end: new Date(toDate),
    });
  }

  if (fromDate) {
    return isAfter(new Date(date), new Date(fromDate));
  }

  if (toDate) {
    return isBefore(new Date(date), new Date(toDate));
  }

  return true;
};
