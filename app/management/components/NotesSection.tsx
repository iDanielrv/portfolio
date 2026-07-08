"use client";

import { useState } from "react";
import type { Note } from "../lib/types";

export function NotesSection({
  notes,
  setNotes,
}: {
  notes: Note[];
  setNotes: (n: Note[] | ((prev: Note[]) => Note[])) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(notes[0]?.id ?? null);
  const selected = notes.find((n) => n.id === selectedId) ?? null;

  const addNote = () => {
    const note: Note = { id: crypto.randomUUID(), title: "Nova nota", content: "", updatedAt: Date.now() };
    setNotes((prev) => [note, ...prev]);
    setSelectedId(note.id);
  };

  const updateSelected = (patch: Partial<Note>) => {
    if (!selected) return;
    setNotes((prev) => prev.map((n) => (n.id === selected.id ? { ...n, ...patch, updatedAt: Date.now() } : n)));
  };

  const remove = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-[#e5e7eb]">Notas</h2>
        <button
          onClick={addNote}
          className="bg-[#10b981] text-[#062018] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#34d399] transition-colors"
        >
          + Nova nota
        </button>
      </div>
      <p className="text-[#9ca3af] text-sm mb-6">Ideias, combinados e lembretes do negócio.</p>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4">
        <ul className="space-y-2">
          {notes.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => setSelectedId(n.id)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                  selectedId === n.id
                    ? "bg-[#10b981]/15 border-[#10b981]/30 text-[#e5e7eb]"
                    : "bg-[#14171b] border-[#23272d] text-[#9ca3af] hover:text-[#e5e7eb]"
                }`}
              >
                <p className="font-medium truncate">{n.title || "Sem título"}</p>
                <p className="text-xs text-[#6b7280] mt-1">{new Date(n.updatedAt).toLocaleDateString("pt-BR")}</p>
              </button>
            </li>
          ))}
          {notes.length === 0 && <p className="text-sm text-[#6b7280] px-1">Nenhuma nota ainda.</p>}
        </ul>

        <div className="bg-[#14171b] border border-[#23272d] rounded-xl p-5">
          {selected ? (
            <>
              <div className="flex items-center gap-2 mb-3">
                <input
                  value={selected.title}
                  onChange={(e) => updateSelected({ title: e.target.value })}
                  className="flex-1 bg-transparent text-lg font-bold text-[#e5e7eb] outline-none"
                  placeholder="Título"
                />
                <button onClick={() => remove(selected.id)} className="text-[#6b7280] hover:text-[#f87171] text-xs">
                  excluir
                </button>
              </div>
              <textarea
                value={selected.content}
                onChange={(e) => updateSelected({ content: e.target.value })}
                rows={12}
                placeholder="Escreva aqui..."
                className="w-full bg-transparent text-sm text-[#e5e7eb] outline-none resize-none placeholder:text-[#6b7280]"
              />
            </>
          ) : (
            <p className="text-sm text-[#6b7280]">Selecione ou crie uma nota.</p>
          )}
        </div>
      </div>
    </div>
  );
}
