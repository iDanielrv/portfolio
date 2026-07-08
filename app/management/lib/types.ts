export type Section = "dashboard" | "todos" | "notes" | "kanban" | "calendar" | "finance" | "goals";

export type Todo = {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
};

export type KanbanColumn = "todo" | "doing" | "done";

export type KanbanCard = {
  id: string;
  text: string;
  column: KanbanColumn;
};

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
};

export type FinanceEntry = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  date: string;
};

export type Goal = {
  id: string;
  title: string;
  progress: number;
};
