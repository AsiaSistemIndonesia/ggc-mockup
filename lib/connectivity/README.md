# GGC PWA Connectivity Management Module

Centralized connectivity manager providing real-time browser online/offline detection and dev/demo offline mode override.

## Architecture

```
                       ┌────────────────────────────┐
                       │  window.navigator.onLine   │
                       └─────────────┬──────────────┘
                                     │
                             (online/offline events)
                                     ▼
                       ┌────────────────────────────┐
                       │    ConnectivityProvider    │
                       └─────────────┬──────────────┘
                                     │
                 ┌───────────────────┴───────────────────┐
                 │                                       │
                 ▼                                       ▼
    isRealOnline (browser)                 demoOffline (Dev override)
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     │
                                     ▼
                      effective status ("online" | "offline")
                                     │
                                     ▼
                    useConnectivity() / ConnectionStatus
```

## Usage

Wrap your application with `<ConnectivityProvider>` in root layout.

### React Hook

```tsx
import { useConnectivity } from "@/components/providers/connectivity-provider";

function MyComponent() {
  const { isOnline, status, isRealOnline, demoOffline, toggleDemoOffline } = useConnectivity();

  return (
    <div>
      <p>Status: {status}</p>
      <p>Effective Online: {isOnline ? "Yes" : "No"}</p>
    </div>
  );
}
```

### UI Component

```tsx
import { ConnectionStatus } from "@/components/ui-custom/connectivity/connection-status";

// Compact dot + text (for topbar / sidebar)
<ConnectionStatus variant="compact" showDemoToggle={true} />

// Rounded chip
<ConnectionStatus variant="pill" />

// Full alert box banner
<ConnectionStatus variant="banner" showDemoToggle={true} />
```

## Demo Offline Override

During development or offline demonstration:
- Toggle demo mode interactively via UI buttons or call `toggleDemoOffline()`.
- Set environment variable `NEXT_PUBLIC_ENABLE_OFFLINE_DEMO=true`.
- In production, `demoOffline` is strictly disabled unless `NEXT_PUBLIC_ENABLE_OFFLINE_DEMO=true` is set.
