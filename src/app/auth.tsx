'use client';

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { User } from 'lucide-react';

export default function AuthSection() {
  return (
    <div className="text-right">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="flex items-center gap-2 font-semibold bg-gray-200 p-2 rounded-md hover:bg-gray-300">
            <User className='w-5 h-5 text-gray-700' />
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
