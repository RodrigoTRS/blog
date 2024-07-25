import { Mail, Phone } from "lucide-react";

export function ContactInformation() {
    return (
        <div>
            <h3 className="text-lg mb-2">Contact information</h3>
            <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary"/>
                    <p className="text-muted-foreground">rodrigoteix1998@gmail.com</p>
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary"/>
                    <p className="text-muted-foreground">+55 (19) 99849-9946</p>
                </li>
            </ul>
        </div>
    )
}