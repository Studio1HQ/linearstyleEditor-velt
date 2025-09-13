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
  Menu,
  ChevronRight,
  ChevronLeft,
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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded); // Toggle expanded/collapsed state
  };

  return (
    <div
      className={`${
        isSidebarExpanded ? "w-64" : "w-20"
      } bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300 ease-in-out max-h-screen overflow-scroll`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div
          className={`flex items-center ${
            isSidebarExpanded ? "justify-between" : "justify-center"
          } gap-2`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-semibold text-gray-100 inline-flex items-center gap-[0.2px] ${
                isSidebarExpanded ? "inline-flex" : "hidden"
              }`}
            >
              TaskFlow
            </span>
          </div>
          {isSidebarExpanded && (
            <div className="flex items-center gap-1">
              {/* Toggle Sidebar Button (Search or SquarePen Icon) */}
              <Search
                className="p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full"
                onClick={toggleSidebar}
              />
              <SquarePen
                className="p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full"
                onClick={toggleSidebar}
              />
            </div>
          )}
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
            {/* Show Text only when the sidebar is expanded */}
            <span className={`${isSidebarExpanded ? "block" : "hidden"}`}>
              {item.label}
            </span>
            {item.count && isSidebarExpanded && (
              <span className="ml-auto bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full w-6 h-6">
                {item.count}
              </span>
            )}
          </Button>
        ))}

        <Separator className="my-4 bg-gray-800" />

        {/* Workspace Section */}
        <div className="space-y-2">
          {isSidebarExpanded && (
            <div className="flex items-center gap-2 text-sm text-gray-400 px-3">
              <span>Workspace</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          )}

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-9 hover:text-orange-300 hover:bg-gray-800"
          >
            <Database className="w-4 h-4 text-orange-500" />
            <span className={`${isSidebarExpanded ? "block" : "hidden"}`}>
              KitOps DevRel
            </span>
          </Button>
        </div>

        <Separator className="my-4 bg-gray-800" />

        <div className="space-y-2">
          {/* Team Section */}
          {isSidebarExpanded && (
            <div className="flex items-center gap-2 text-sm text-gray-400 px-3">
              <span>Your teams</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          )}

          {teamItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 h-9 text-gray-400 hover:text-gray-200 hover:bg-gray-800"
            >
              <item.icon className="w-4 h-4" />
              <span className={`${isSidebarExpanded ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <Separator className="my-4 bg-gray-800" />
      </div>
      {!isSidebarExpanded ? (
        <ChevronRight
          className={`mx-auto p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full`}
          onClick={toggleSidebar}
        />
      ) : (
        <ChevronLeft
          className={`ml-auto p-2 w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer rounded-full`}
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
