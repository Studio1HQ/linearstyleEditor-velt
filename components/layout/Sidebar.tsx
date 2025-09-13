"use client";

import { useState } from "react";
import {
  Inbox,
  User,
  Target,
  FolderOpen,
  Eye,
  MoreHorizontal,
  Upload,
  UserPlus,
  RotateCcw,
  Github,
  ChevronDown,
  Zap,
  Search,
  SquarePen,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: Inbox, label: "Inbox", count: 5 },
  { icon: User, label: "My Issues" },
  { icon: Target, label: "Initiatives" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Eye, label: "Views" },
  { icon: MoreHorizontal, label: "More" },
];

const teamItems = [
  { icon: Upload, label: "Import issues" },
  { icon: UserPlus, label: "Invite people" },
  { icon: RotateCcw, label: "Cycles" },
  { icon: Github, label: "Link GitHub" },
];

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("My Issues");

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-100 inline-flex items-center gap-[0.2px]">
              TaskFlow
              <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
            </span>
          </div>
          <div className="flex items-center ">
            <Search className="p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full" />
            <SquarePen className="p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={`w-full justify-start gap-3 h-9 ${
              selectedItem === item.label
                ? "bg-gray-800 text-gray-100"
                : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
            }`}
            onClick={() => setSelectedItem(item.label)}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
            {item.count && (
              <span className="ml-auto bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full w-6 h-6">
                {item.count}
              </span>
            )}
          </Button>
        ))}

        <Separator className="my-4 bg-gray-800" />

        {/* Workspace Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400 px-3">
            <span>Workspace</span>
            <ChevronDown className="w-3 h-3" />
          </div>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-9 hover:text-orange-300 hover:bg-gray-800"
          >
          <Database className="w-4 h-4 text-orange-500" />
            <span>KitOps DevRel</span>
          </Button>
        </div>

        <Separator className="my-4 bg-gray-800" />

        {/* Team Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400 px-3">
            <span>Your teams</span>
            <ChevronDown className="w-3 h-3" />
          </div>

          {teamItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 h-9 text-gray-400 hover:text-gray-200 hover:bg-gray-800"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>

        <Separator className="my-4 bg-gray-800" />

        {/* Try Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400 px-3">
            <span>Try</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
