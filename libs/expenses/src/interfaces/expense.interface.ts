export interface Expense {
  id: string;
  createdAt: string;

  amount: number;
  date: string;
  description?: string;
}
