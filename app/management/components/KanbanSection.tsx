"use client";

import { useState } from "react";
import type { KanbanCard, KanbanColumn } from "../lib/types";

const COLUMNS: { id: KanbanColumn; label: string }[] = [
  { id: "todo", label: "A Fazer" },
  { id: "doing", label: "Fazendo" },
  { id: "done", label: "Feito" },
];

export function KanbanSection({
  cards,
  setCards,
}: {
  cards: KanbanCard[];
  setCards: (c: KanbanCard[] | ((prev: KanbanCard[]) => KanbanCard[])) => void;
}) {
  const [text, setText] = useState("");

  const add = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setCards((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed, column: "todo" }]);
    setText("");
  };

  const move = (id: string, dir: -1 | 1) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const idx = COLUMNS.findIndex((col) => col.id === c.column);
        const nextIdx = Math.min(COLUMNS.length - 1, Math.max(0, idx + dir));
        return { ...c, column: COLUMNS[nextIdx].id };
      })
    );
  };

  const remove = (id: string) => setCards((prev) => prev.filter((c) => c.id !== id));

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Kanban</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Fluxo de trabalho das tarefas do negócio.</p>

      <div className="flex gap-2 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Novo card..."
          className="flex-1 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <button
          onClick={add}
          className="bg-[#10b981] text-[#062018] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          Adicionar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLUMNS.map((col) => (
          <div key={col.id} className="bg-[#14171b] border border-[#23272d] rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono mb-3">
              {col.label} ({cards.filter((c) => c.column === col.id).length})
            </p>
            <div className="space-y-2 min-h-[60px]">
              {cards
                .filter((c) => c.column === col.id)
                .map((c) => (
                  <div key={c.id} className="bg-[#0b0d10] border border-[#23272d] rounded-lg p-3">
                    <p className="text-sm text-[#e5e7eb] mb-2">{c.text}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex gap-2">
                        <button
                          disabled={col.id === "todo"}
                          onClick={() => move(c.id, -1)}
                          className="text-[#9ca3af] hover:text-[#34d399] disabled:opacity-20 disabled:hover:text-[#9ca3af]"
                        >
                          ← mover
                        </button>
                        <button
                          disabled={col.id === "done"}
                          onClick={() => move(c.id, 1)}
                          className="text-[#9ca3af] hover:text-[#34d399] disabled:opacity-20 disabled:hover:text-[#9ca3af]"
                        >
                          mover →
                        </button>
                      </div>
                      <button onClick={() => remove(c.id)} className="text-[#6b7280] hover:text-[#f87171]">
                        ×
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
