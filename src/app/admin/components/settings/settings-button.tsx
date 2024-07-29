import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Settings } from "lucide-react";

export function SettingsButton() {
    return (
        <DialogTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                >
                <Settings className="w-5 h-5"/>
            </Button>
        </DialogTrigger>
    )
}