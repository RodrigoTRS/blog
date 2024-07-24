import { Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import Instagram from "@/../public/instagram.svg"
import Image from "next/image";
import { Button } from "./ui/button";
import { Navmenu } from "./nav-menu";

export function Footer() {
    return (
        <footer className="flex w-full bg-background border-t items-center justify-center px-8 lg:px-4 py-12">
            <div className="grid grid-cols-2 gap-12 w-full max-w-[1120px]">
                <div className="flex flex-col w-full items-start gap-6">
                    <Logo />
                    <div>
                        <h3 className="text-lg mb-2">Contact information</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary"/>
                                <p className="text-muted-foreground">rodrigoteix1998@gmail.com</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-primary"/>
                                <p className="text-muted-foreground">+55 (19) 99849-9946</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="icon" className="w-12 h-12 rounded-full">
                            <Image src={Instagram} width={24} height={24} alt="Access Instagram" className="invert"/>
                        </Button>
                        <Button size="icon" className="w-12 h-12 rounded-full">
                            <Image src={Instagram} width={24} height={24} alt="Access Instagram" className="invert"/>
                        </Button>
                        <Button size="icon" className="w-12 h-12 rounded-full">
                            <Image src={Instagram} width={24} height={24} alt="Access Instagram" className="invert"/>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4">
                    <h3 className="text-lg mb-2">Navigation</h3>
                    <div className="flex flex-col w-full items-end gap-6">
                            <Navmenu orientation="vertical"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}