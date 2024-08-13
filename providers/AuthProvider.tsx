import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';


export async function AuthProvider({ children }: { children: ReactNode }) {
   const session = await auth()
   return (
      <SessionProvider session={session}>
         {children}
      </SessionProvider>)
}
