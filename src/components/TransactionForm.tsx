import React, { useState } from "react";

interface Props {
  addTransaction: (
    description: string,
    value: number,
    type: "income" | "expense",
  ) => void;
}

const TransactionForm = ({ addTransaction }: Props) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!description.trim() || value <= 0) return;

    if (!description.trim()) {
      setError("description is required!");
      return;
    }

    if (value <= 0) {
      setError("value must be greater than 0!");
      return;
    }

    addTransaction(description, value, type);

    setDescription("");
    setValue(0);
    // setType("income");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-4">
      <form className="space-x-3" onSubmit={handleSubmit}>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className="border p-2"
        >
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>

        <input
          type="text"
          className="w-96 border p-2"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          className="w-24 border p-2"
          value={value}
          onChange={(e) =>
            setValue(e.target.value ? Number(e.target.value) : 0)
          }
        />

        <button type="submit" className="hidden">
          Add
        </button>

        {error && (
          <div className="flex justify-center text-center italic text-red-500 mt-2">{error}</div>
        )}
      </form>
    </div>
  );
};

export default TransactionForm;
