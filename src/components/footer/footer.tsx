"use client"

import React from "react"
import Link from "next/link"
import Team37Logo from "../logo/Team37Logo"
import { NAV_ITEMS } from "../navbar/itemsList"
import { SOCIAL_ITEMS_LIST } from "./socialItemsList"
import { CONTACT_ITEMS_LIST } from "./contactItemsList"
import { Link as LinkNextUi } from "@nextui-org/react"

const Footer = () => {
	return (
		<>
			<div className="flex flex-col gap-10 md:flex-row justify-between">
				<section className="brand-identity flex flex-col justify-between items-start gap-4 h-48 text-base leading-6 font-medium text-zinc-300">
					<Link href="#">
						<Team37Logo width={150} height={150} />
					</Link>
					<p>PT Solutek Nusa Abadi</p>
					<p className="w-[277px]">
						Ruko Mega Grosir Cempaka Mas Blok I No.51, Jalan Sumur
						Batu, Kecamatan Kemayoran, Jakarta Pusat
					</p>
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Contact Info
					</h3>
					{CONTACT_ITEMS_LIST.map((item, index) => (
						<Link
							key={`${item}-${index}`}
							className="hover:text-zinc-50 transition duration-300"
							href={`${item.href}`}
							target={item.target}
						>
							<div className="flex flex-row gap-4 text-base leading-6 font-normal">
								<item.icon />
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Sitelinks
					</h3>
					<ul className="flex flex-col gap-4 text-zinc-300">
						{NAV_ITEMS.map((item, index) => (
							<Link
								key={`${item}-${index}`}
								className="hover:text-zinc-50 transition duration-300"
								href={`${item.href}`}
							>
								<li>{item.label}</li>
							</Link>
						))}
					</ul>
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Follow Us
					</h3>
					<div className="flex md:flex-row flex-wrap w-44 gap-4 md:gap-6">
						{SOCIAL_ITEMS_LIST.map((item, index) => (
							<LinkNextUi
								key={`${item}-${index}`}
								className="text-white hover:text-zinc-500 transition duration-100 ease-linear"
								href={`${item.href}`}
								target={item.target}
								isDisabled={item.isDisabled}
							>
								<item.icon />
							</LinkNextUi>
						))}
					</div>
				</section>
			</div>
			<span className="flex flex-row items-center align-middle justify-center text-sm leading-5 md:text-base md:leading-6 font-medium text-stone-500">
				Team 37 &copy; 2023. All rights reserved.
			</span>
		</>
	)
}

export default Footer
