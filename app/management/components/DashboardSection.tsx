import type { Todo, Note, FinanceEntry, CalendarEvent, Goal } from "../lib/types";

export function DashboardSection({
  todos,
  notes,
  finance,
  events,
  goals,
}: {
  todos: Todo[];
  notes: Note[];
  finance: FinanceEntry[];
  events: CalendarEvent[];
  goals: Goal[];
}) {
  const pendingTodos = todos.filter((t) => !t.done).length;
  const balance = finance.reduce((sum, e) => sum + (e.type === "income" ? e.amount : -e.amount), 0);
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))[0];
  const avgProgress = goals.length ? Math.round(goals.reduce((s, g) => s + g.progress, 0) / goals.length) : 0;

  const cards = [
    { label: "Afazeres pendentes", value: pendingTodos, hint: `${todos.length} no total` },
    { label: "Notas salvas", value: notes.length, hint: "anotações rápidas" },
    {
      label: "Saldo",
      value: balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      hint: `${finance.length} lançamentos`,
    },
    {
      label: "Próximo evento",
      value: upcoming ? upcoming.title : "—",
      hint: upcoming ? new Date(upcoming.date + "T00:00:00").toLocaleDateString("pt-BR") : "nada agendado",
    },
    { label: "Progresso médio das metas", value: `${avgProgress}%`, hint: `${goals.length} metas ativas` },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Resumo</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Visão geral do negócio de vocês dois.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-[#14171b] border border-[#23272d] rounded-xl p-5">
            <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono">{c.label}</p>
            <p className="text-2xl font-bold text-[#e5e7eb] mt-2">{c.value}</p>
            <p className="text-xs text-[#9ca3af] mt-1">{c.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
