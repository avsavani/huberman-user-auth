"use client";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation";
;

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex h-full flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white">
            Auth
        </h1>
        <p className="text-white text-xl">
            A simple authentication service
        </p>
        <LoginButton>
          <Button variant="secondary"  size="lg">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
