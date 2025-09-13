'use client';

import { Clock, AlertCircle, User, Tag, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function RightSidebar() {
  return (
    <div className="w-80 bg-gray-900 border-l border-gray-800 p-6">
      <div className="space-y-6">
        {/* Status */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-400" />
            <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
              In Progress
            </Badge>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <AlertCircle className="w-4 h-4" />
            Set priority
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <User className="w-4 h-4" />
            Assign
          </Button>
        </div>

        <Separator className="bg-gray-800" />

        {/* Labels */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300">Labels</h3>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-gray-400 hover:text-gray-200"
          >
            <Tag className="w-4 h-4" />
            Add label
          </Button>
        </div>

        <Separator className="bg-gray-800" />

        {/* Project */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300">Project</h3>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-sm" />
            <span className="text-sm text-gray-200">Social Media</span>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Properties */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300">Properties</h3>
          <div className="text-sm text-gray-400">
            No properties set
          </div>
        </div>
      </div>
    </div>
  );
}