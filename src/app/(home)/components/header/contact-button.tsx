import { Button } from "../../../../components/ui/button";
import { DialogTrigger } from "../../../../components/ui/dialog";

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