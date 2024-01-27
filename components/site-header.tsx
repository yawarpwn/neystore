import { MainNav } from "@/components/main-nav";
import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { SocialIcons } from "./social-icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl flex justify-between h-14 items-center">
        <Link href={"/"}>
          <Logo />
        </Link>
        <MainNav />
        <div className="hidden md:flex">
          <SocialIcons />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
