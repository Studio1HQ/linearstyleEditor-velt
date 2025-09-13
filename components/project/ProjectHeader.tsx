"use client";

import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Database,
  Ellipsis,
  MoreHorizontal,
  Share,
  Star,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  useSetDocument,
  useVeltClient,
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltSidebarButton,
} from "@veltdev/react";
import { names, userIds, useUserStore } from "@/helper/userdb";
import { useEffect, useMemo } from "react";

export function ProjectHeader() {
  const { user, setUser } = useUserStore();
  const { client } = useVeltClient();
  const predefinedUsers = useMemo(
    () =>
      userIds.map((uid, index) => {
        // Use DiceBear Avatars for demonstration
        const avatarUrls = [
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Nany",
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Mary",
        ];
        return {
          uid: uid,
          displayName: names[index],
          email: `${names[index].toLowerCase()}@gmail.com`,
          photoUrl: avatarUrls[index],
        };
      }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      const storedUser = localStorage.getItem("user-storage");
      if (!storedUser) {
        setUser(predefinedUsers[0]);
      }
    }
  }, [user, setUser, predefinedUsers]);
  useSetDocument("linearStyleEditor", { documentName: "linearStyleEditor" });

  useEffect(() => {
    if (!client || !user) return;
    const veltUser = {
      userId: user.uid,
      organizationId: "organization_id",
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl, // Pass avatar to Velt
    };

    client.identify(veltUser);
  }, [client, user]);
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
           DevRel
          <ChevronRight className="w-4 h-4 text-gray-500" />
          KST-12
          <Star className="w-4 h-4 text-gray-400" />
          <Ellipsis className="w-4 h-4 text-gray-400" />
        </div>

        {/* Right Section: Share, Star, More, and Sidebar Button */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 h-8 dark:bg-[#2f3349] dark:border dark:border-white/30"
              >
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src={user?.photoUrl || "https://via.placeholder.com/100"}
                    alt={user?.displayName || "User"}
                  />
                  <AvatarFallback className="text-xs">
                    {user?.displayName}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate max-w-[100px]">
                  {user?.displayName}
                </span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 dark:bg-[#2f3349]">
              <DropdownMenuLabel>Select User</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:bg-white/40" />
              {predefinedUsers.map((Currentuser) => (
                <DropdownMenuItem
                  key={Currentuser.uid}
                  onClick={() => setUser(Currentuser)}
                  className="flex items-center space-x-3 p-3 cursor-pointer hover:dark:bg-[#515881]"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={Currentuser.photoUrl}
                      alt={Currentuser.displayName}
                    />
                    <AvatarFallback className="text-xs">
                      {Currentuser.displayName}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white/70">
                      {Currentuser.displayName}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-white/60">
                      {Currentuser.email}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-white/50">
                      User
                    </div>
                  </div>
                  {user?.uid === Currentuser.uid && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 text-blue-600 hover:dark:bg-[#515881] ">
                <User size={16} />
                <span className="hover:dark:text-white/70">Manage Users</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <VeltNotificationsTool darkMode={true} />
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
          <VeltCommentsSidebar darkMode={true} />
        </div>
      </div>
    </div>
  );
}
