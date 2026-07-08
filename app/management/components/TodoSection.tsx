"use client";

import { useState } from "react";
import type { Todo } from "../lib/types";

export function TodoSection({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: (t: Todo[] | ((prev: Todo[]) => Todo[])) => void;
}) {
  const [text, setText] = useState("");

  const add = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [{ id: crypto.randomUUID(), text: trimmed, done: false, createdAt: Date.now() }, ...prev]);
    setText("");
  };

  const toggle = (id: string) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id: string) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const pending = todos.filter((t) => !t.done);
  const done = todos.filter((t) => t.done);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e5e7eb] mb-1">Afazeres</h2>
      <p className="text-[#9ca3af] text-sm mb-6">Tarefas do dia a dia da empresa.</p>

      <div className="flex gap-2 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Nova tarefa..."
          className="flex-1 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-2.5 text-sm text-[#e5e7eb] placeholder:text-[#6b7280] outline-none focus:border-[#10b981]/50"
        />
        <button
          onClick={add}
          className="bg-[#10b981] text-[#062018] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          Adicionar
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono mb-2">Pendentes ({pending.length})</p>
          <ul className="space-y-2">
            {pending.map((t) => (
              <li key={t.id} className="flex items-center gap-3 bg-[#14171b] border border-[#23272d] rounded-lg px-4 py-3">
                <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="accent-[#10b981] w-4 h-4" />
                <span className="flex-1 text-sm text-[#e5e7eb]">{t.text}</span>
                <button onClick={() => remove(t.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
                  remover
                </button>
              </li>
            ))}
            {pending.length === 0 && <p className="text-sm text-[#6b7280]">Nada pendente.</p>}
          </ul>
        </div>

        {done.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wide text-[#6b7280] font-mono mb-2">Concluídos ({done.length})</p>
            <ul className="space-y-2">
              {done.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center gap-3 bg-[#14171b]/50 border border-[#23272d] rounded-lg px-4 py-3"
                >
                  <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="accent-[#10b981] w-4 h-4" />
                  <span className="flex-1 text-sm text-[#6b7280] line-through">{t.text}</span>
                  <button onClick={() => remove(t.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
                    remover
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
