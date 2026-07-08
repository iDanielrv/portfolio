"use client";

import { useState } from "react";
import type { FinanceEntry } from "../lib/types";

export function FinanceSection({
  entries,
  setEntries,
}: {
  entries: FinanceEntry[];
  setEntries: (e: FinanceEntry[] | ((prev: FinanceEntry[]) => FinanceEntry[])) => void;
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  const add = () => {
    const value = parseFloat(amount.replace(",", "."));
    if (!description.trim() || !value || value <= 0) return;
    setEntries((prev) => [
      { id: crypto.randomUUID(), description: description.trim(), amount: value, type, date: new Date().toISOString().slice(0, 10) },
      ...prev,
    ]);
    setDescription("");
    setAmount("");
  };

  const remove = (id: string) => setEntries((prev) => prev.filter((e) => e.id !== id));

  const income = entries.filter((e) => e.type === "income").reduce((s, e) => s + e.amount, 0);
  const expense = entries.filter((e) => e.type === "expense").reduce((s, e) => s + e.amount, 0);
  const balance = income - expense;
  const fmt = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Financeiro</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Entradas e saídas do negócio.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#14171b] border border-[#23272d] rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono">Entradas</p>
          <p className="text-lg font-bold text-[#34d399] mt-1">{fmt(income)}</p>
        </div>
        <div className="bg-[#14171b] border border-[#23272d] rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono">Saídas</p>
          <p className="text-lg font-bold text-[#f87171] mt-1">{fmt(expense)}</p>
        </div>
        <div className="bg-[#14171b] border border-[#23272d] rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono">Saldo</p>
          <p className="text-lg font-bold text-[#e5e7eb] mt-1">{fmt(balance)}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição..."
          className="flex-1 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor (R$)"
          inputMode="decimal"
          className="w-full sm:w-32 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className="bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] outline-none focus:border-[#10b981]/50"
        >
          <option value="income">Entrada</option>
          <option value="expense">Saída</option>
        </select>
        <button
          onClick={add}
          className="bg-[#10b981] text-[#062018] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {entries.map((e) => (
          <li key={e.id} className="flex items-center gap-4 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-3">
            <span
              className={`text-xs font-mono px-2 py-1 rounded ${
                e.type === "income" ? "bg-[#10b981]/15 text-[#34d399]" : "bg-[#f87171]/15 text-[#f87171]"
              }`}
            >
              {e.type === "income" ? "+" : "-"}
              {fmt(e.amount)}
            </span>
            <span className="flex-1 text-sm text-[#e5e7eb]">{e.description}</span>
            <span className="text-xs text-[#6b7280]">{new Date(e.date + "T00:00:00").toLocaleDateString("pt-BR")}</span>
            <button onClick={() => remove(e.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
              remover
            </button>
          </li>
        ))}
        {entries.length === 0 && <p className="text-sm text-[#6b7280]">Nenhum lançamento ainda.</p>}
      </ul>
    </div>
  );
}
