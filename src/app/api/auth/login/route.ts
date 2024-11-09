// app/api/auth/login/route.ts
import { handleLogin } from '@auth0/nextjs-auth0';

export async function GET(req: Request) {
  return handleLogin(req);
}
