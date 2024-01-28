import { MainNav } from "@/components/main-nav";
import { MobileNav } from "./mobile-nav";
import { SocialIcons } from "./social-icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl flex justify-between h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="hidden md:flex items-center gap-2">
          <SocialIcons />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
