// middleware.ts
import { handleAuth } from '@auth0/nextjs-auth0/edge';

export default handleAuth({
  loginUrl: () => '/api/auth/login',
  logoutUrl: () => '/api/auth/logout',
  callbackUrl: () => '/api/auth/callback',
});
