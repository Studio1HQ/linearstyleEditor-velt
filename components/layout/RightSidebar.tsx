"use client";

import {
  Clock,
  AlertCircle,
  User,
  Tag,
  FolderOpen,
  Link,
  Workflow,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function RightSidebar() {
  return (
    <div className="w-80 bg-[#101113] border-l border-gray-800 p-6 hidden sm:block">
      <div className="w-full flex justify-between items-start gap-2 text-gray-400 hover:text-gray-200">
        <p>Properties</p>
        <div className="flex justify-start items-start gap-2 mb-4">
          <Link className="w-4 h-4" />
          <Workflow className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-6">
        {/* Status */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <p>In Progress</p>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="hidden sm:block">Set priority</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:block">Assign</span>
          </Button>
        </div>

        <Separator className="bg-gray-800" />

        {/* Labels */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300 hidden sm:block">
            Labels
          </h3>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <Tag className="w-4 h-4" />
            <span className="hidden sm:block">Add label</span>
          </Button>
        </div>

        <Separator className="bg-gray-800" />

        {/* Project */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300 hidden sm:block">
            Project
          </h3>
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200">
            <Box className="w-4 h-4" />{" "}
            <span className="text-sm text-gray-200 hidden sm:block">
              Social Media
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
