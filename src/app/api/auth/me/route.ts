// app/api/auth/me/route.ts
import { handleProfile } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';  // Import the correct type for requests

export async function GET(req: NextRequest) {
  return handleProfile(req);  // Pass the correctly typed 'req'
}
