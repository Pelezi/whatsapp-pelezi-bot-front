'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, User, Phone, Edit2, Save, X } from 'lucide-react';
import { getConversations, updateContactCustomName } from '@/lib/chatApi';
import { Contact } from '@/types';
import toast from 'react-hot-toast';

export default function ContactInfoPage() {
  const params = useParams();
  const router = useRouter();
  const contactId = params.id as string;

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [customName, setCustomName] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadContact();
  }, [contactId]);

  async function loadContact() {
    try {
      const conversations = await getConversations();
      const conversation = conversations.find(c => c.contact.id === contactId);
      
      if (conversation) {
        setContact(conversation.contact);
        setCustomName(conversation.contact.customName || '');
      }
    } catch (error) {
      console.error('Error loading contact:', error);
      toast.error('Erro ao carregar contato');
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveCustomName() {
    if (!contact) return;

    setSaving(true);
    try {
      await updateContactCustomName(contact.id, customName);
      toast.success('Nome personalizado atualizado!');
      setIsEditing(false);
      // Update local state
      setContact({ ...contact, customName });
    } catch (error) {
      console.error('Error updating custom name:', error);
      toast.error('Erro ao atualizar nome');
    } finally {
      setSaving(false);
    }
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setCustomName(contact?.customName || '');
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Contato não encontrado</p>
        <button
          onClick={() => router.back()}
          className="text-green-600 hover:underline"
        >
          Voltar
        </button>
      </div>
    );
  }

  const displayName = contact.customName || contact.name || contact.waId;

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-900 dark:text-gray-100" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Informações do Contato
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-white font-bold text-5xl">
                {displayName[0]?.toUpperCase() || '?'}
              </span>
            </div>
          </div>

          {/* Display Name */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {displayName}
            </h2>
          </div>

          {/* Info Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y dark:divide-gray-700">
            {/* WhatsApp Name */}
            {contact.name && (
              <div className="p-4 flex items-center gap-3">
                <User className="text-gray-500 dark:text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nome do WhatsApp</p>
                  <p className="text-gray-900 dark:text-white">{contact.name}</p>
                </div>
              </div>
            )}

            {/* Phone Number */}
            <div className="p-4 flex items-center gap-3">
              <Phone className="text-gray-500 dark:text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Número</p>
                <p className="text-gray-900 dark:text-white">+{contact.waId}</p>
              </div>
            </div>

            {/* Custom Name */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Edit2 className="text-gray-500 dark:text-gray-400" size={20} />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nome Personalizado</p>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
                  >
                    Editar
                  </button>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Digite um nome personalizado"
                    className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveCustomName}
                      disabled={saving}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition"
                    >
                      <Save size={16} />
                      {saving ? 'Salvando...' : 'Salvar'}
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      disabled={saving}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      <X size={16} />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-900 dark:text-white">
                  {contact.customName || <span className="italic text-gray-500 dark:text-gray-400">Não definido</span>}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
