/**
 * ============================================================================
 * DEMO JWT SIMULATOR (SECURITY BOUNDARY NOTICE)
 * ============================================================================
 * THIS IS A FRONTEND DEMONSTRATION ONLY.
 * - Client-side generated tokens are NOT a production security boundary.
 * - No private cryptographic secret is stored or used in the browser.
 * - In production, real JWTs must be issued, signed, and validated by the backend.
 * ============================================================================
 */

export interface JwtPayload {
  sub: string;
  role: string;
  operator_subtype?: string;
  site_id: string;
  iat: number;
  exp: number;
}

export function generateDemoJwt(payload: Omit<JwtPayload, "iat" | "exp">, durationHours = 24): string {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + durationHours * 3600;

  const fullPayload: JwtPayload = {
    ...payload,
    iat,
    exp,
  };

  const header = { alg: "HS256", typ: "JWT" };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(fullPayload));
  const mockSignature = btoa("demo_signature_frontend_only");

  return `${encodedHeader}.${encodedPayload}.${mockSignature}`;
}

export function parseDemoJwt(token: string): JwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payloadJson = atob(parts[1]);
    return JSON.parse(payloadJson) as JwtPayload;
  } catch {
    return null;
  }
}
