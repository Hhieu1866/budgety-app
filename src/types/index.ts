export interface Transaction {
  id: string;
  description: string;
  value: number;
  type: "income" | "expense";
  date: Date;
}
