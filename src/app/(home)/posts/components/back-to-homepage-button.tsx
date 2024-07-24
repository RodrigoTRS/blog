import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function BackToHomepageButton() {
    return (
        <Button
            variant="secondary"
            asChild
            className="flex items-center justify-center gap-2 pl-2 mb-6"
        >
            <Link href="/">
                <ChevronLeft />
                Back to home page
            </Link>
        </Button>
    )
}