"use client";
import { VeltInlineCommentsSection } from "@veltdev/react";

import useTheme from "@/hooks/useTheme";
export function CommentBox() {
  const { theme } = useTheme();
  return (
    <div className="space-y-3">
      <section id="container-id">
        <VeltInlineCommentsSection
          multiThread={true}
          targetElementId="container-id"
          shadowDom={false}
          dialogVariant="dialog-variant"
          variant="inline-section-variant"
          darkMode={theme === "dark"}
        />
      </section>
    </div>
  );
}
