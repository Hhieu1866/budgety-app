interface BudgetHeaderProps {
  total: number;
  income: number;
  expenses: number;
}

export default function BudgetHeader({
  total,
  income,
  expenses,
}: BudgetHeaderProps) {
  const displayMonthYear = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // % cua exp so voi inc
  const expensePercent =
    income > 0 ? ((expenses / income) * 100).toFixed(0) : "0";

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-slate-500 py-16 text-white">
      <p className="text-lg">Available Budget in {displayMonthYear}</p>
      <h1 className="text-5xl font-extralight">
        {total >= 0 ? "+" : "-"} {Math.abs(total).toFixed(2)}
      </h1>

      {/* Income / Expenses */}
      <div className="w-80 space-y-2">
        <div className="flex w-full justify-between bg-[#30bcb4] px-3 py-3">
          <span className="uppercase">Income</span>
          <span>+ {income.toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-between bg-red-500 px-3 py-3">
          <span className="uppercase">Expenses</span>
          <span>- {expenses.toFixed(2)}</span>
          <span className="text-white-200 rounded bg-red-600 px-3 py-1 text-sm">
            {expensePercent}%
          </span>
        </div>
      </div>
    </div>
  );
}
