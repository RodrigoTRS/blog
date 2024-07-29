import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginPageButton() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <span className="text-muted-foreground text-sm text-center">Already have an account?</span>
            <Link href="/login"> 
                <Button
                    variant="secondary"
                    className="w-full"
                >
                    Login
                </Button>
            </Link>
        </div>
    )
}