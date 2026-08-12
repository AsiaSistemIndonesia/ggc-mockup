export type ConnectivityStatus = "online" | "offline" | "checking";

export interface ConnectivityState {
  /** Effective application status: "online" | "offline" | "checking" */
  status: ConnectivityStatus;
  /** Effective online boolean (true only if real browser is online AND demoOffline is false) */
  isOnline: boolean;
  /** Real browser online signal (navigator.onLine) */
  isRealOnline: boolean;
  /** Timestamp (ISO string) when the browser was last online */
  lastOnlineAt: string | null;
  /** Demo/development forced offline override flag */
  demoOffline: boolean;
}

export interface ConnectivityContextType extends ConnectivityState {
  /** Function to set demo offline override mode */
  setDemoOffline: (enabled: boolean) => void;
  /** Function to toggle demo offline override mode */
  toggleDemoOffline: () => void;
}
