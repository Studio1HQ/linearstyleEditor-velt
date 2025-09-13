"use client";

import { ProjectHeader } from "@/components/project/ProjectHeader";
import { DocumentSection } from "@/components/project/DocumentSection";
import { ActivitySection } from "@/components/project/ActivitySection";
import { CommentBox } from "@/components/project/CommentBox";

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col min-w-0 max-h-screen overflow-y-auto">
      <ProjectHeader />
      <div className="flex-1 p-6 space-y-8">
        <DocumentSection />
        <ActivitySection />
        <CommentBox />
      </div>
    </div>
  );
}
