import { Clerk } from '@clerk/nextjs';

const clerkConfig = {
  publishableKey: 'your-publishable-key',
  secretKey: 'your-secret-key',
  signInUrl: '/sign-in',
  signUpUrl: '/sign-up',
};

const clerk = new Clerk(clerkConfig);

export default clerk;