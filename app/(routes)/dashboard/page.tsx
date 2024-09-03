// pages/dashboard.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <SignedIn>
        
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardPage;
