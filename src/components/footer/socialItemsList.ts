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
    { icon: TikTok, href: "https://www.tiktok.com/@team37.id?_t=8fvs8Jhjf1z&_r=1", target:"_blank" },
    { icon: LinkedIn, href: "https://www.linkedin.com/company/team-37-id/", target:"_blank" },
    { icon: Facebook, href: "", target:"_blank", isDisabled: true },
    { icon: Twitter, href: "https://twitter.com/team37_id", target:"_blank" },
    { icon: YouTube, href: "", target:"_blank", isDisabled: true },
    { icon: Dribbble, href: "https://dribbble.com/team37_id", target:"_blank" },
    { icon: GitHub, href: "https://github.com/Team37-ID", target:"_blank" },
]
