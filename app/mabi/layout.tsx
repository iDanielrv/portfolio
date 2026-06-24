import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Açougue MABI - Cortes Premium & Artesanais",
};

export default function MabiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
