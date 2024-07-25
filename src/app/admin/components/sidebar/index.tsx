import { Logo } from "@/components/logo";
import { SidebarLink } from "./sidebar-link";
import { AlignJustify, BookMarked, CircleGauge, FileChartColumnIncreasing, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";

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
                <Button
                    variant="outline"
                    size="icon"
                    >
                    <Settings className="w-5 h-5 text-primary"/>
                </Button>
            </SidebarFooter>
        </aside>
    )
}