import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

export function CreatePostButton() {
    return (
        <DialogTrigger asChild>
            <Button>
                Create new post
            </Button>
        </DialogTrigger>
    )
}