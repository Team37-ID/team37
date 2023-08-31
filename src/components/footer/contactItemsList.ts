import { ContactTypes } from "@/types/types";
import {
    Phone,
    Mail,
} from "iconoir-react";

export const CONTACT_ITEMS_LIST: ContactTypes[] = [
    { icon: Mail, href: "mailto:team37.id@gmail.com", target:"_blank", label:"team37.id@gmail.com" },
    { icon: Phone, href: "https://api.whatsapp.com/send?phone=62812878722257", target:"_blank", label:"+62 812-8787-2257" },
]