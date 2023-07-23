import NavBar from "@/components/NavigationBar/NavBar"
import NavItemList from "@/components/NavigationBar/NavItemList"
import Image from "next/image"
import Link from "next/link"
import { NAV_ITEMS } from "@/components/NavigationBar/itemsList"

export default function Home() {
  return (
    <main className="flex flex-row justify-center min-h-screen md:p-24">
      <header>
        <NavBar>
          <Link href="#" passHref>
            <Image src="/team37-logo.svg" alt="logo" width={128} height={128} />
          </Link>
          <NavItemList>
            {NAV_ITEMS.map((item) => (
              <Link href={item.href || "/"} key={item.label} target="_blank">
                <button>{item.label}</button>
              </Link>
            ))}
          </NavItemList>
          <button>Contact us</button>
        </NavBar>
      </header>
    </main>
  )
}
