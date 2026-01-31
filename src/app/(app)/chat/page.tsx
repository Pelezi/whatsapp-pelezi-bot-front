'use client';

import { useState, useEffect } from 'react';
import { ConversationList, ChatWindow } from '@/components/chat';
import { Conversation } from '@/types';
import { useAppStore } from '@/lib/store';

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const { setIsChatOpen } = useAppStore();

  useEffect(() => {
    setIsChatOpen(!!selectedConversation);
  }, [selectedConversation, setIsChatOpen]);

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="flex h-full">
      {/* Conversation List - Hidden on mobile when chat is selected */}
      <div className={`w-full md:w-1/3 md:max-w-md ${
        selectedConversation ? 'hidden md:block' : 'block'
      }`}>
        <ConversationList
          onSelectConversation={setSelectedConversation}
          selectedId={selectedConversation?.id}
        />
      </div>

      {/* Chat Area - Hidden on mobile when no chat is selected */}
      <div className={`w-full md:flex-1 ${
        selectedConversation ? 'block' : 'hidden md:block'
      }`}>
        {selectedConversation ? (
          <ChatWindow 
            conversation={selectedConversation} 
            onBack={handleBack}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-500 dark:text-gray-400">Selecione uma conversa para começar</p>
          </div>
        )}
      </div>
    </div>
  );
}
