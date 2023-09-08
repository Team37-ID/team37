import { SocialMediaTypes } from "@/types/types";
import {
    Instagram,
    TikTok,
    LinkedIn,
    Facebook,
    Twitter,
    YouTube,
    Dribbble,
    GitHub,
} from "iconoir-react";

export const SOCIAL_ITEMS_LIST: SocialMediaTypes[] = [
    { icon: Instagram, href: "https://instagram.com/team37.id", target:"_blank" },
    { icon: TikTok, href: "", target:"_blank", isDisabled: true },
    { icon: LinkedIn, href: "https://www.linkedin.com/company/team-37-id/", target:"_blank" },
    { icon: Facebook, href: "", target:"_blank", isDisabled: true },
    { icon: Twitter, href: "", target:"_blank", isDisabled: true },
    { icon: YouTube, href: "", target:"_blank", isDisabled: true },
    { icon: Dribbble, href: "", target:"_blank", isDisabled: true },
    { icon: GitHub, href: "https://github.com/Team37-ID", target:"_blank" },
]
