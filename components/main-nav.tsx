"use client";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {docsConfig.mainNav.map(({ href, title }) => {
          return (
            <Link
              key={title}
              href={href as Route}
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
