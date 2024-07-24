import { Menu } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import Link from "next/link";
import { MenuOptions } from "./nav-menu";

export function MobileMenu(props: ButtonProps) {
    return (
        <div className="block lg:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        {...props}
                        >
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {
                        MenuOptions.map(({ title, path }) => {
                            return (
                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer hover:text-muted-foreground"
                                    key={title}
                                >
                                    <Link href={path}>
                                        {title}
                                    </Link>
                                </DropdownMenuItem>
                            )
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu> 
        </div>
    )
}