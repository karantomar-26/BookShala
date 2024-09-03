// pages/index.tsx
import Hero from "@/components/landingpage/Hero";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignedIn>
        {/* Show content when signed in */}
        <div>Welcome to the home page! You’re signed in.</div>
      </SignedIn>
    </div>
  );
};

export default HomePage;
