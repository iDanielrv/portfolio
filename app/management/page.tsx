"use client";

import { useState } from "react";
import "./management.css";
import { useLocalStorage } from "./lib/useLocalStorage";
import type { Section, Todo, Note, KanbanCard, CalendarEvent, FinanceEntry, Goal } from "./lib/types";
import { Sidebar } from "./components/Sidebar";
import { DashboardSection } from "./components/DashboardSection";
import { TodoSection } from "./components/TodoSection";
import { NotesSection } from "./components/NotesSection";
import { KanbanSection } from "./components/KanbanSection";
import { CalendarSection } from "./components/CalendarSection";
import { FinanceSection } from "./components/FinanceSection";
import { GoalsSection } from "./components/GoalsSection";

export default function GestaoPage() {
  const [section, setSection] = useState<Section>("dashboard");
  const [companyName, setCompanyName] = useLocalStorage<string>("gestao:company", "Nossa Empresa");
  const [todos, setTodos] = useLocalStorage<Todo[]>("gestao:todos", []);
  const [notes, setNotes] = useLocalStorage<Note[]>("gestao:notes", []);
  const [cards, setCards] = useLocalStorage<KanbanCard[]>("gestao:kanban", []);
  const [events, setEvents] = useLocalStorage<CalendarEvent[]>("gestao:events", []);
  const [finance, setFinance] = useLocalStorage<FinanceEntry[]>("gestao:finance", []);
  const [goals, setGoals] = useLocalStorage<Goal[]>("gestao:goals", []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0b0d10]">
      <Sidebar active={section} onChange={setSection} companyName={companyName} onCompanyNameChange={setCompanyName} />
      <main className="flex-1 px-4 sm:px-8 py-8 max-w-5xl">
        <div className="md:hidden mb-6">
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-transparent text-lg font-bold text-[#e5e7eb] outline-none w-full"
          />
        </div>
        {section === "dashboard" && (
          <DashboardSection todos={todos} notes={notes} finance={finance} events={events} goals={goals} />
        )}
        {section === "todos" && <TodoSection todos={todos} setTodos={setTodos} />}
        {section === "notes" && <NotesSection notes={notes} setNotes={setNotes} />}
        {section === "kanban" && <KanbanSection cards={cards} setCards={setCards} />}
        {section === "calendar" && <CalendarSection events={events} setEvents={setEvents} />}
        {section === "finance" && <FinanceSection entries={finance} setEntries={setFinance} />}
        {section === "goals" && <GoalsSection goals={goals} setGoals={setGoals} />}
      </main>
    </div>
  );
}
