"use client";

import { useState } from "react";
import type { CalendarEvent } from "../lib/types";

export function CalendarSection({
  events,
  setEvents,
}: {
  events: CalendarEvent[];
  setEvents: (e: CalendarEvent[] | ((prev: CalendarEvent[]) => CalendarEvent[])) => void;
}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const add = () => {
    if (!title.trim() || !date) return;
    setEvents((prev) => [...prev, { id: crypto.randomUUID(), title: title.trim(), date }]);
    setTitle("");
    setDate("");
  };

  const remove = (id: string) => setEvents((prev) => prev.filter((e) => e.id !== id));

  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Calendário</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Datas e compromissos importantes.</p>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Evento..."
          className="flex-1 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] outline-none focus:border-[#10b981]/50"
        />
        <button
          onClick={add}
          className="bg-[#10b981] text-[#062018] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {sorted.map((e) => (
          <li
            key={e.id}
            className={`flex items-center gap-4 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-3 ${
              e.date < today ? "opacity-50" : ""
            }`}
          >
            <div className="bg-[#0b0d10] border border-[#23272d] rounded-lg px-3 py-1.5 text-xs font-mono text-[#34d399] shrink-0">
              {new Date(e.date + "T00:00:00").toLocaleDateString("pt-BR")}
            </div>
            <span className="flex-1 text-sm text-[#e5e7eb]">{e.title}</span>
            <button onClick={() => remove(e.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
              remover
            </button>
          </li>
        ))}
        {sorted.length === 0 && <p className="text-sm text-[#6b7280]">Nenhum evento agendado.</p>}
      </ul>
    </div>
  );
}
