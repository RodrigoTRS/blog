import clsx from "clsx";
import { Navlink } from "./nav-link";
import { fetchMenuOptions } from "@/actions/fetch-menu-options";


interface NavmenuProps {
    orientation: "vertical" | "horizontal",
    horizontalAlign?: "left" | "right",
    onlyDesktop?: boolean
}

export async function Navmenu({ orientation, onlyDesktop = false, horizontalAlign = "left" }: NavmenuProps) {
    const menuOptions = await fetchMenuOptions();

    return (
        <nav className={clsx(
            "justify-center",
            onlyDesktop && "hidden lg:flex",
            horizontalAlign === "left"
            ? "items-start"
            : "lg:items-end",
            orientation === "vertical"
            ? "flex flex-col gap-2" 
            : "flex flex-row items-center gap-6"
        )}>
            {menuOptions.map(({ title, slug }) => {
                return (
                    <Navlink href={`/${slug}`} key={title}>
                        {title}
                    </Navlink>
                )
            })}
        </nav>
    )
}