// app/api/auth/logout/route.ts
import { handleLogout } from '@auth0/nextjs-auth0';

export async function GET(req: Request) {
  return handleLogout(req);
}
