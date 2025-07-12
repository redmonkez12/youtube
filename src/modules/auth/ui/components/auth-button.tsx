"use client";

import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
    return (
        <>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-600/20 rounded-full shadow-none">
                        <UserCircleIcon />
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}