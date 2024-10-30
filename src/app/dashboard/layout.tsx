import React, { ReactNode } from "react";
import Navbar from "./_component/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-accent/5">
      <Navbar />
      <div className="container py-6">{children}</div>
    </div>
  );
}
