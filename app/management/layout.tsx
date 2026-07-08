import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel de Gestão (teste)",
};

export default function GestaoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
