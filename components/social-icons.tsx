import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { type Route } from "next";
import Link from "next/link";
import { Icons } from "./icons";

export function SocialIcons() {
  return (
    <nav className="flex items-center">
      {Object.entries(siteConfig.links).map(([social, url]) => (
        <Link
          key={social}
          href={url as Route}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0",
            )}
          >
            {Icons[social]()}
            <span className="sr-only">{social}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
