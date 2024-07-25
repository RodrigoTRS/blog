import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Logo } from "../logo";
import { Navmenu } from "../menu/nav-menu";
import { MobileMenu } from "../menu/mobile-menu";
import { ContactButton } from "./contact-button";
import { Dialog } from "../ui/dialog";
import { ContactModal } from "./contact-modal";


export function Header() {

    return (
        <div className="flex w-full bg-background border-b items-center justify-center p-4">
            <div className="flex w-full max-w-[1120px] justify-between items-center">
                <Link href="/" className="hover:opacity-70">
                    <Logo />
                </Link>

                <div className="flex gap-8">
                    <Navmenu
                        orientation="horizontal"
                        onlyDesktop
                    />
                    
                    <div className="flex items-center justify-center gap-4">
                        <Dialog>
                            <ContactButton />
                            <ContactModal />
                        </Dialog>
                        <MobileMenu/>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}
