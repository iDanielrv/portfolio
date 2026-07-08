"use client";

import { useState } from "react";
import type { Goal } from "../lib/types";

export function GoalsSection({
  goals,
  setGoals,
}: {
  goals: Goal[];
  setGoals: (g: Goal[] | ((prev: Goal[]) => Goal[])) => void;
}) {
  const [title, setTitle] = useState("");

  const add = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setGoals((prev) => [...prev, { id: crypto.randomUUID(), title: trimmed, progress: 0 }]);
    setTitle("");
  };

  const updateProgress = (id: string, progress: number) =>
    setGoals((prev) => prev.map((g) => (g.id === id ? { ...g, progress } : g)));
  const remove = (id: string) => setGoals((prev) => prev.filter((g) => g.id !== id));

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Metas do mês</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Objetivos que vocês estão perseguindo.</p>

      <div className="flex gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Nova meta..."
          className="flex-1 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <button
          onClick={add}
          className="bg-[#10b981] text-[#062018] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          Adicionar
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((g) => (
          <div key={g.id} className="bg-[#14171b] border border-[#23272d] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#e5e7eb] font-medium">{g.title}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#34d399]">{g.progress}%</span>
                <button onClick={() => remove(g.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
                  remover
                </button>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={g.progress}
              onChange={(e) => updateProgress(g.id, Number(e.target.value))}
              className="w-full accent-[#10b981]"
            />
            <div className="w-full bg-[#0b0d10] rounded-full h-2 mt-1 overflow-hidden">
              <div className="bg-[#10b981] h-full transition-all" style={{ width: `${g.progress}%` }} />
            </div>
          </div>
        ))}
        {goals.length === 0 && <p className="text-sm text-[#6b7280]">Nenhuma meta definida ainda.</p>}
      </div>
    </div>
  );
}
