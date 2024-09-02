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
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </header>
    </Sheet>
  );
};

export default Header;
