import React from "react";
import { NavBar } from "@/components/partials";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen">
      <NavBar />
      {children}
    </main>
  );
}
