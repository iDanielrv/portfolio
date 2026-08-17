import type { Metadata } from "next";
import { labs } from "@/lib/labs";

export const metadata: Metadata = {
  title: "Labs — Estudos de vitrine | Daniel Ripper V.",
  // sem listar os nichos: a lista envelhece toda vez que uma landing entra
  description: `${labs.length} landing pages fictícias para comércio local brasileiro. HTML e CSS escritos à mão, sem framework.`,
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
