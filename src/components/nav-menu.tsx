import { Navlink } from "./nav-link";

export function Navmenu() {
    return (
        <nav className="flex items-center justify-center gap-6">
            <Navlink href="/">
                Home
            </Navlink>
            <Navlink href="/latest">
                Latest
            </Navlink>
            <Navlink href="/most-reads">
                Most reads
            </Navlink>
        </nav>
    )
}