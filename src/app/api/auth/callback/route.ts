// app/api/auth/callback/route.ts
import { handleCallback } from '@auth0/nextjs-auth0';

export async function GET(req: Request) {
  return handleCallback(req);
}
