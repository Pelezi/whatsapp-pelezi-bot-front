import api, { apiClient } from '@/lib/apiClient';
import { AuthResponse, LoginResponse, User } from '@/types';

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', { email, password });
    const data = response.data;

    // From here we expect an AuthResponse shape
    const auth = data as AuthResponse;
    if (auth.token) {
      apiClient.setToken(auth.token);
      if (typeof window !== 'undefined') {
        // Store refresh token
        localStorage.setItem('refreshToken', auth.refreshToken);
        
        // Merge top-level role into the persisted user when present
        const userToPersist = auth.user.role
          ? { ...auth.user, role: auth.user.role }
          : auth.user;
        localStorage.setItem('user', JSON.stringify(userToPersist));
      }
    }

    return auth;
  },

  refreshToken: async (): Promise<AuthResponse | null> => {
    try {
      if (typeof window === 'undefined') return null;
      
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return null;

      const response = await api.post<AuthResponse>('/auth/refresh', { refreshToken });
      const auth = response.data;

      if (auth.token) {
        apiClient.setToken(auth.token);
        if (typeof window !== 'undefined') {
          // Store new refresh token
          localStorage.setItem('refreshToken', auth.refreshToken);
          
          // Update user info
          const userToPersist = auth.user.role
            ? { ...auth.user, role: auth.user.role }
            : auth.user;
          localStorage.setItem('user', JSON.stringify(userToPersist));
        }
      }

      return auth;
    } catch (error) {
      // If refresh fails, clear all auth data
      authService.logout();
      return null;
    }
  },

  logout: async () => {
    try {
      // Call backend logout endpoint to invalidate refresh token
      await api.post('/auth/logout');
    } catch (error) {
      // Continue with local logout even if API call fails
      console.error('Logout API call failed:', error);
    } finally {
      // Clear all local storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      }
    }
  },

  getCurrentUser: () => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  setCurrentUser: (user: User | null) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  isAuthenticated: (): boolean => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  },
};
