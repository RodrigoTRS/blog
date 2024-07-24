import { Menu } from "lucide-react";
import Link from "next/link";
import { fetchMenuOptions } from "@/actions/fetch-menu-options";
import { Button, ButtonProps } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export async function MobileMenu(props: ButtonProps) {
    const menuOptions = await fetchMenuOptions();

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
                    {menuOptions.map(({ title, slug }) => {
                            return (
                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer hover:text-muted-foreground"
                                    key={title}
                                >
                                    <Link href={slug}>
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