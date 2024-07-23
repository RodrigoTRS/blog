import { Logo } from "./logo";

export function Footer() {
    return (
        <div className="flex w-full bg-muted-foreground/10 border-t items-center justify-center px-4 py-12">
            <div className="grid grid-cols-2 gap-12 w-full max-w-[1120px]">
                <div className=" flex flex-col w-full items-start gap-6 ">
                    <Logo />
                    <div>
                        <h3>Contact information</h3>
                        <span><p>Test</p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}