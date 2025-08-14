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
    income > 0 ? `${((expenses / income) * 100).toFixed(0)} %` : "__";

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-slate-500/80 py-16 text-white">
      <p className="text-lg">Available Budget in {displayMonthYear}</p>
      <h1 className="text-5xl font-extralight">
        {total >= 0 ? "+" : "-"} {Math.abs(total).toFixed(2)}
      </h1>

      {/* Income / Expenses */}
      <div className="w-80 space-y-2">
        <div className="bg-income flex w-full justify-between p-3">
          <span className="font-medium uppercase">Income</span>
          <span>+ {income.toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-between bg-red-500 p-3">
          <span className="font-medium uppercase">Expenses</span>
          <div className="space-x-3">
            <span className="rounded bg-red-700 px-3 py-1 text-sm text-white">
              {expensePercent}
            </span>
            <span>- {expenses.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
