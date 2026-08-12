import rolesData from "@/data/auth/roles.json";
import permissionsData from "@/data/auth/permissions.json";

export type RoleCode = "IO" | "FO" | "QO" | "SUP" | "FIN" | "ADM" | "VW";

export const ROLE_LANDING_ROUTES: Record<string, string> = {
  IO: "/inbound",
  FO: "/stock",
  QO: "/outbound",
  SUP: "/dashboard",
  FIN: "/procure",
  ADM: "/dashboard",
  VW: "/dashboard",
};

/**
 * Screen-level Access Matrix according to PRD Section 3
 * true = allowed (full, action, or read-only access)
 * false = denied (no access)
 */
const SCREEN_ACCESS_MATRIX: Record<string, string[]> = {
  IO: ["/dashboard", "/inbound", "/stock", "/cctv", "/cartrack", "/analisa"],
  FO: ["/dashboard", "/stock", "/cctv", "/cartrack", "/analisa"],
  QO: ["/dashboard", "/stock", "/outbound", "/barge", "/cctv", "/cartrack", "/analisa"],
  SUP: ["/dashboard", "/procure", "/inbound", "/stock", "/outbound", "/retail", "/barge", "/cartrack", "/cctv", "/analisa", "/reports"],
  FIN: ["/dashboard", "/procure", "/stock", "/analisa", "/reports"],
  ADM: ["/dashboard", "/procure", "/inbound", "/stock", "/outbound", "/retail", "/barge", "/cartrack", "/cctv", "/analisa", "/reports", "/admin"],
  VW: ["/dashboard", "/inbound", "/stock", "/outbound", "/barge", "/cartrack", "/cctv", "/analisa", "/reports"],
};

export function getLandingRouteForRole(roleCode: string): string {
  return ROLE_LANDING_ROUTES[roleCode] || "/dashboard";
}

export function canAccessRoute(roleCode: string | undefined, route: string): boolean {
  if (!roleCode) return false;
  if (route === "/login" || route === "/") return true;

  const allowedRoutes = SCREEN_ACCESS_MATRIX[roleCode];
  if (!allowedRoutes) return false;

  // Check if route matches any allowed base route prefix
  return allowedRoutes.some((allowed) => route === allowed || route.startsWith(`${allowed}/`));
}

export function getRoleName(roleCode: string): string {
  const roleObj = rolesData.find((r) => r.code === roleCode);
  return roleObj ? roleObj.name : roleCode;
}
