import { Logo } from "../../../../components/logo";
import { Navmenu } from "../menu/nav-menu";
import { ContactInformation } from "./contact-information";
import { SocialMediaIcon } from "./social-media-icon";
import { siInstagram, siLinkedin } from "simple-icons";

export function Footer() {
    return (
        <footer className="flex w-full bg-background border-t items-center justify-center px-8 lg:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1120px]">
                <div className="flex flex-col w-full items-start gap-6">
                    <Logo />
                    <ContactInformation />
                    <div className="flex items-center gap-2">
                        <SocialMediaIcon
                            link="https://www.instagram.com/rodeees/"
                            icon={siInstagram}
                        />

                        <SocialMediaIcon
                            link="https://www.linkedin.com/in/rodrigoteixeiraribeirodasilva/"
                            icon={siLinkedin}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4">
                    <h3 className="text-lg mb-2">Navigation</h3>
                    <div className="flex flex-col w-full items-start lg:items-end gap-6">
                            <Navmenu
                                orientation="vertical"
                                horizontalAlign="right"
                            />
                    </div>
                </div>
            </div>
        </footer>
    )
}