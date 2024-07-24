import clsx from "clsx";
import { Navlink } from "./nav-link";

export const MenuOptions = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Latest",
        path: "/latest"
    },
    {
        title: "Trending",
        path: "/trending"
    }
] 

interface NavmenuProps {
    orientation: "vertical" | "horizontal"
}

export function Navmenu({ orientation }: NavmenuProps) {

    return (
        <nav className={clsx(
            "justify-center",
            orientation === "vertical"
            ? "flex flex-col items-end gap-2"
            : "hidden lg:flex flex-row items-center gap-6"
        )}>
            {
                MenuOptions.map(({ title, path }) => {
                    return (
                        <Navlink href={path} key={title}>
                            {title}
                        </Navlink>
                    )
                })
            }
        </nav>
    )
}