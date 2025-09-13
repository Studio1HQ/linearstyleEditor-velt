"use client";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Database,
  Ellipsis,
  MoreHorizontal,
  Share,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltSidebarButton,
} from "@veltdev/react";

export function ProjectHeader() {
  return (
    <div className="border-b border-gray-800 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section: Back Button & Project Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto text-gray-400">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="bg-yellow-500/40 p-1 rounded">
            <Database className="text-yellow-400 w-4 h-4" />
          </div>
          KitOps DevRel
          <ChevronRight className="w-4 h-4 text-gray-500" />
          KST-12
          <Star className="w-4 h-4 text-gray-400" />
          <Ellipsis className="w-4 h-4 text-gray-400" />
        </div>

        {/* Right Section: Share, Star, More, and Sidebar Button */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <VeltNotificationsTool />
          <Button variant="ghost" size="sm" className="text-gray-400">
            <Share className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <Star className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <VeltSidebarButton darkMode={true} />
          <VeltCommentsSidebar />
        </div>
      </div>
    </div>
  );
}
