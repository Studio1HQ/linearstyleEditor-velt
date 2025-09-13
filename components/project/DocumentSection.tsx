"use client";

import RichTextEditor from "@/components/editor/RichTextEditor";
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus } from "lucide-react";

export function DocumentSection() {
  return (
    <div className="space-y-6">
      <div>
        <div className="space-y-8">
          <h1 className="text-2xl font-semibold text-black/80 dark:text-gray-100">Social Media</h1>
          <p className="text-gray-400 mt-1">
            Plans and content related to social media
          </p>
        </div>
        <h2 className="text-xl font-semibold text-black/80 dark:text-gray-100 my-4">
          All Post Doc
        </h2>

        {/* Google Docs Link */}
        <div className="bg-white dark:bg-[#101113] border border-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ExternalLink className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">docs.google.com</span>
          </div>
          <div className="text-sm text-blue-400 break-all">
            https://docs.google.com/document/d/1nTaHJGuNoiwZ2dAayhl_-jIHK-HltdSVp4G9Mza4-M/edit?usp=sharing
          </div>
        </div>

        {/* Rich Text Editor */}
        <RichTextEditor />
      </div>

      <Button
        variant="ghost"
        className="gap-2 text-gray-400 hover:text-gray-200"
      >
        <Plus className="w-4 h-4" />
        Add sub-issues
      </Button>
    </div>
  );
}
