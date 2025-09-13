"use client";

import { User, FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const activities = [
  {
    id: 1,
    type: "created",
    user: "anand",
    action: "created the issue",
    time: "1mo ago",
    icon: User,
  },
  {
    id: 2,
    type: "added",
    user: "anand",
    action: "added to project Social Media",
    time: "1mo ago",
    icon: FolderPlus,
  },
];

export function ActivitySection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-black/80 dark:text-gray-100">
          Activity
        </h3>
        <Button variant="ghost" size="sm" className="text-gray-400">
          Unsubscribe
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id}>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <activity.icon className="w-3 h-3 text-gray-400" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-black/80 dark:text-gray-200">
                  {activity.user}
                </span>
                <span className="text-gray-400"> {activity.action} • </span>
                <span className="text-gray-500">{activity.time}</span>
              </div>
            </div>
            {index < activities.length - 1 && (
              <Separator className="mt-4 bg-gray-800" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
