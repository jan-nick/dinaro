import { Expense } from '@dinaro/expenses';

export const expenseMockFactory = (): Expense => ({
  id: 'id',
  createdAt: '2020-01-01T12:30:00+00:00',
  amount: 10,
  date: '2020-01-01T12:00:00+00:00',
  description: 'description',
});

export const expensesMockFactory = (): Expense[] => [
  {
    id: 'id-1',
    createdAt: '2020-01-01T12:30:00+00:00',
    amount: 10,
    date: '2020-01-01T12:00:00+00:00',
    description: 'description-1',
  },
  {
    id: 'id-2',
    createdAt: '2020-01-01T14:30:00+00:00',
    amount: 20,
    date: '2020-01-15T12:00:00+00:00',
    description: 'description-2',
  },
  {
    id: 'id-3',
    createdAt: '2020-01-01T16:30:00+00:00',
    amount: 30,
    date: '2020-06-01T12:00:00+00:00',
    description: 'description-3',
  },
  {
    id: 'id-4',
    createdAt: '2020-01-01T18:30:00+00:00',
    amount: 40,
    date: '2020-06-15T12:00:00+00:00',
    description: 'description-4',
  },
];
