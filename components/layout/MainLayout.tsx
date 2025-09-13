"use client";

import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { RightSidebar } from "./RightSidebar";
import { useSetDocument } from "@veltdev/react";

export function MainLayout() {
  useSetDocument("linearStyleEditor", { documentName: "linearStyleEditor" });

  return (
    <div className="max-h-screen bg-gray-950 flex">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}
