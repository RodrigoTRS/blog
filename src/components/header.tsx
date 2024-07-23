import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { Navmenu } from "./nav-menu";

export function Header() {
    return (
        <div className="flex w-full bg-background border-b items-center justify-center p-4">
            <div className="flex w-full max-w-[1120px] justify-between items-center">
                <Link href="/" className="hover:opacity-70">
                    <Logo />
                </Link>

                <div className="flex gap-8">
                    <Navmenu />
                    
                    <div className="flex items-center justify-center gap-2">
                        <Button
                            variant="default"
                            className="font-bold"
                        >
                            Contact
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}