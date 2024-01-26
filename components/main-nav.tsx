"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IsoLogo } from "./iso-logo";

import { Logo } from "@/components/logo";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img className="w-10" src="/favicon.svg" />
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {docsConfig.mainNav.map(({ href, title }) => {
          return (
            <Link
              key={title}
              href={href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
