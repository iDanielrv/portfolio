"use client";

import type { Section } from "../lib/types";

const NAV: { id: Section; label: string; icon: string }[] = [
  { id: "dashboard", label: "Resumo", icon: "📊" },
  { id: "todos", label: "Afazeres", icon: "✅" },
  { id: "notes", label: "Notas", icon: "📝" },
  { id: "kanban", label: "Kanban", icon: "🗂️" },
  { id: "calendar", label: "Calendário", icon: "📅" },
  { id: "finance", label: "Financeiro", icon: "💰" },
  { id: "goals", label: "Metas", icon: "🎯" },
];

export function Sidebar({
  active,
  onChange,
  companyName,
  onCompanyNameChange,
}: {
  active: Section;
  onChange: (s: Section) => void;
  companyName: string;
  onCompanyNameChange: (name: string) => void;
}) {
  return (
    <aside className="w-full md:w-60 shrink-0 bg-[#14171b] border-b md:border-b-0 md:border-r border-[#23272d] md:h-screen md:sticky md:top-0 flex md:flex-col">
      <div className="px-6 py-6 hidden md:block">
        <p className="text-[11px] uppercase tracking-widest text-[#6ee7b7] font-mono">Painel</p>
        <input
          value={companyName}
          onChange={(e) => onCompanyNameChange(e.target.value)}
          className="text-xl font-bold text-[#e5e7eb] mt-1 bg-transparent outline-none w-full"
        />
      </div>
      <nav className="flex md:flex-col overflow-x-auto md:overflow-visible flex-1 px-2 md:px-3 py-2 md:py-0 gap-1">
        {NAV.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              active === item.id
                ? "bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30"
                : "text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-white/5 border border-transparent"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
