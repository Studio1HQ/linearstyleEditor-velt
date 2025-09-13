'use client';

import { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function CommentBox() {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      // Handle comment submission
      console.log('Submitting comment:', comment);
      setComment('');
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <Textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] resize-none bg-[#101113] border-gray-700 text-gray-200 placeholder-gray-500"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
            <Paperclip className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
            <Smile className="w-4 h-4" />
          </Button>
        </div>
        
        <Button 
          onClick={handleSubmit}
          disabled={!comment.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Send className="w-4 h-4 mr-2" />
          Comment
        </Button>
      </div>
    </div>
  );
}