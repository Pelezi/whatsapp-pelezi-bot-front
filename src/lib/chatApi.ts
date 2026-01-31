import apiClient from './apiClient';
import { Conversation, Message } from '@/types';

/**
 * Get all conversations
 */
export async function getConversations(): Promise<Conversation[]> {
  const response = await apiClient.get('/conversations');
  return response.data;
}

/**
 * Get messages for a specific conversation
 */
export async function getMessages(conversationId: string): Promise<Message[]> {
  const response = await apiClient.get(`/conversations/${conversationId}/messages`);
  return response.data;
}

/**
 * Send a text message
 */
export async function sendMessage(conversationId: string, text: string, replyToId?: string): Promise<Message> {
  const response = await apiClient.post(`/conversations/${conversationId}/messages`, {
    text,
    replyToId,
  });
  return response.data;
}

/**
 * Update contact custom name
 */
export async function updateContactCustomName(contactId: string, customName: string): Promise<void> {
  await apiClient.patch(`/conversations/${contactId}/custom-name`, {
    customName,
  });
}
