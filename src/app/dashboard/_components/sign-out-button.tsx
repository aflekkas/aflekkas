"use client";

import { Button } from "@/components/ui/button";
import { signout } from "@/app/auth/actions";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="mt-6"
      onClick={() => signout()}
    >
      Sign out
    </Button>
  );
}
