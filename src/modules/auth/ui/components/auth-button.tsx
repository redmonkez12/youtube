"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  const pathname = usePathname();
  const isOnStudio = pathname.startsWith("/studio");

  return (
    <>
      <SignedIn>
        {!isOnStudio && (
          <Button asChild>
            <Link href="/studio">
              <ClapperboardIcon />
              Studio
            </Link>
          </Button>
        )}
        <UserButton>
          <UserButton.MenuItems>
            {!isOnStudio && (
              <UserButton.Link
                href="/studio"
                label="Studio"
                labelIcon={<ClapperboardIcon className="size-4" />}
              />
            )}
            <UserButton.Action label="manageAccount"/>
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-600/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
