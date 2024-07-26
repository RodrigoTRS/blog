import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

export function ManagePostButton() {
    return (
        <DialogTrigger asChild>
            <Button>
                Create new post
            </Button>
        </DialogTrigger>
    )
}