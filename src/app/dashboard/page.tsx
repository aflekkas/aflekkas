import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "./_components/sign-out-button";

export const metadata = {
  title: "Dashboard | The 1%",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/auth");
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-neutral-950 px-6">
      <div className="w-full max-w-sm text-center">
        <p className="text-xs tracking-normal text-neutral-500">
          Dashboard
        </p>
        <h1 className="mt-4 text-2xl font-medium tracking-tight text-white">
          You&apos;re{" "}
          <span className="font-[family-name:var(--font-instrument-serif)] italic">
            in
          </span>
        </h1>
        <p className="mt-3 text-sm text-neutral-400">
          Signed in as{" "}
          <span className="font-mono text-neutral-300">{data.user.email}</span>
        </p>
        <SignOutButton />
      </div>
    </div>
  );
}
