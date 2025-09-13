"use client";

import { ArrowLeft, MoreHorizontal, Share, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltSidebarButton,
} from "@veltdev/react";

export function ProjectHeader() {
  return (
    <div className="border-b border-gray-800 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div>
            <h1 className="text-2xl font-semibold text-gray-100">
              Social Media
            </h1>
            <p className="text-gray-400 mt-1">
              Plans and content related to social media
            </p>
          </div>
        </div>
        <VeltNotificationsTool />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <Share className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <Star className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <VeltSidebarButton />
          <VeltCommentsSidebar />
        </div>
      </div>
    </div>
  );
}
