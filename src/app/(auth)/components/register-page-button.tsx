import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RegisterPageButton() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <span className="text-muted-foreground text-sm text-center">Doesn't have an account yet?</span>
            <Link href="/register"> 
                <Button
                    variant="secondary"
                    className="w-full"
                >
                        Register
                </Button>
            </Link>
        </div>
    )
}