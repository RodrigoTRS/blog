import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";

export function ContactButton() {
    return (
        <DialogTrigger asChild>
            <Button
                variant="default"
                className="font-bold"
                >
                    Contact
            </Button>
        </DialogTrigger>
    )
}