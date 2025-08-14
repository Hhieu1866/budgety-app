import { Trash2 } from "lucide-react";
import type { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
  deleteTransaction: (id: string) => void;
}

const TransactionList = ({ transactions, deleteTransaction }: Props) => {
  const incomeList = transactions.filter((t) => t.type === "income");
  const expenseList = transactions.filter((t) => t.type === "expense");

  const totalIncome = incomeList.reduce((sum, t) => sum + t.value, 0);

  return (
    <div className="mx-auto mt-16 flex w-1/2 items-start justify-center gap-16">
      {/* income */}
      <div className="flex-1">
        <h3 className="text-xl uppercase text-[#30bcb4]">Income</h3>
        <ul>
          {incomeList.map((item) => (
            <li
              key={item.id}
              className="group flex items-center justify-between border-t py-3"
            >
              <span>{item.description}</span>

              <div className="flex items-center space-x-3">
                <span className="text-[#30bcb4] transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
                  + {item.value.toFixed(2)}
                </span>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure to delete this transaction?",
                      )
                    ) {
                      deleteTransaction(item.id);
                    }
                  }}
                  className="translate-x-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* expenses */}
      <div className="flex-1">
        <h3 className="text-xl uppercase text-red-500">Expenses</h3>
        <ul>
          {expenseList.map((item) => {
            const percent = totalIncome
              ? ((item.value / totalIncome) * 100).toFixed(0)
              : "0";
            return (
              <li
                key={item.id}
                className="group flex items-center justify-between border-t py-3"
              >
                <span>{item.description}</span>

                <div className="flex items-center space-x-3">
                  <span className="text-red-500 transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
                    - {item.value.toFixed(2)}
                  </span>
                  <span className="rounded bg-red-200 px-3 py-1 text-sm text-red-500 transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
                    {percent}%
                  </span>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure to delete this transaction?",
                        )
                      ) {
                        deleteTransaction(item.id);
                      }
                    }}
                    className="translate-x-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
