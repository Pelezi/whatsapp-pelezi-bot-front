'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MessageSquare, Menu, X, Moon, Sun, FolderKanban, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useCallback } from 'react';
import { useAppStore } from '@/lib/store';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

interface NavItem {
  href?: string;
  label: string;
  icon: React.ReactNode;
  matchPrefix?: boolean;
}

const NavLink = ({ href, icon, label, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
      ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium'
      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const { isSidebarOpen, toggleSidebar, isChatOpen } = useAppStore();
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  }, [toggleSidebar]);

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  const navItems: NavItem[] = [
    { href: '/chat', label: 'Chat', icon: <MessageSquare size={18} />, matchPrefix: false },
    { href: '/projects', label: 'Projects', icon: <FolderKanban size={18} />, matchPrefix: false },
    { href: '/settings', label: 'Configurações', icon: <Settings size={18} />, matchPrefix: false },
  ];

  return (
    <>

      {/* Menu button - visible on mobile only when no chat is open and sidebar is closed */}
      {!isSidebarOpen && !isChatOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 lg:hidden transition-transform hover:scale-105"
        >
          <Menu size={24} className="text-gray-900 dark:text-gray-100" />
        </button>
      )}


      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
        style={{ willChange: 'opacity' }}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 flex flex-col ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'
          }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Pelezi Bot</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded lg:hidden"
            >
              <X size={20} className="text-gray-900 dark:text-gray-100" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            if (!item.href) return null;
            const isActive = item.matchPrefix ? pathname.startsWith(item.href) : pathname === item.href;

            return (
              <NavLink key={`${item.href}-${item.label}`} href={item.href} icon={item.icon} label={item.label} isActive={isActive} onClick={handleNavClick} />
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}