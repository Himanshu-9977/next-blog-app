import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <Sheet>
      <header className="py-4 bg-background/90 z-20 sticky top-0 backdrop-blur border-b px-8">
        <nav className="flex justify-between items-center py-4">
          <Logo />
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link
                href={"/login"}
                className={buttonVariants({ variant: "outline" })}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href={"/signup"}
                className={buttonVariants({ variant: "default" })}
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="flex gap-6 items-center">
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline">
                <Menu className="" />
              </Button>
            </SheetTrigger>
            <ThemeToggle />
          </div>
        </nav>
        <SheetContent>
          <div className="hidden">
          <SheetTitle></SheetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-24">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
            <Link
                href={"/login"}
                className={buttonVariants({ variant: "outline" })}
              >
                Login
              </Link>
            <Link
                href={"/signup"}
                className={buttonVariants({ variant: "default" })}
              >
                Sign up
              </Link>
          </div>
        </SheetContent>
      </header>
    </Sheet>
  );
};

export default Header;
