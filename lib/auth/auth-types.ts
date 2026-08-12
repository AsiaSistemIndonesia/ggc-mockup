export type AuthStatus = "unauthenticated" | "restoring" | "authenticated";
export type AuthMode = "online" | "offline";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  operatorSubtype?: string;
  siteId: string;
  status: string;
}

export interface AuthSession {
  id: string; // "current"
  userId: string;
  token: string;
  role: string;
  operatorSubtype?: string;
  siteId: string;
  loginAt: string;
  lastAuthenticatedAt: string;
  offlineExpiresAt: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  session: AuthSession | null;
  status: AuthStatus;
  mode: AuthMode;
  isRestoring: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  restoreSession: () => Promise<void>;
}
