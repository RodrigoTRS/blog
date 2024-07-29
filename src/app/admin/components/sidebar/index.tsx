import Link from "next/link";
import { Logo } from "@/components/logo";
import { SidebarLink } from "./sidebar-link";
import { AlignJustify, BookMarked, CircleGauge, FileChartColumnIncreasing, Settings } from "lucide-react";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { SettingsButton } from "../settings/settings-button";
import { Dialog } from "@/components/ui/dialog";
import { SettingsModal } from "../settings/settings-modal";

export function Sidebar() {
    return (
        <aside className="fixed flex flex-col items-start justify-between h-screen border-r bg-background w-[320px]">
            <SidebarHeader>
                <Link href="/" className="hover:opacity-70">
                    <Logo variant="full" />
                </Link>
            </SidebarHeader>

            <div className="flex flex-col items-start h-full w-full">
                <nav className="flex flex-col items-start gap-4 w-full p-4">
                    <SidebarLink
                        title="Dashboard"
                        path="/admin"
                        icon={<CircleGauge />}
                        />

                    <SidebarLink
                        title="Blog posts"
                        path="/admin/posts"
                        icon={<FileChartColumnIncreasing />}
                        />

                    <SidebarLink
                        title="Categories"
                        path="/admin/categories"
                        icon={<BookMarked />}
                        />

                    <SidebarLink
                        title="Menu option"
                        path="/admin/menu"
                        icon={<AlignJustify />}
                        />

                </nav>
            </div>


            <SidebarFooter>
                <Dialog>
                    <SettingsButton />
                    <SettingsModal />
                </Dialog>
                <ModeToggle />
            </SidebarFooter>
        </aside>
    )
}