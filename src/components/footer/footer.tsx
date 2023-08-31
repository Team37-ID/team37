"use client"

import React from "react"
import Link from "next/link"
import Team37Logo from "../logo/Team37Logo"
import {
	Phone,
	Mail,
	Instagram,
	TikTok,
	LinkedIn,
	Facebook,
	Twitter,
	YouTube,
	Dribbble,
	GitHub,
} from "iconoir-react"

const Footer = () => {
	return (
		<>
			<div className="flex flex-col gap-10 md:flex-row justify-between">
				<section className="brand-identity flex flex-col justify-between items-start gap-4 h-48 text-base leading-6 font-medium text-zinc-300">
					<Link href="#">
						<Team37Logo width={150} height={150} />
					</Link>
					<p>PT Nusa Tekno Solusi</p>
					<p className="w-[277px]">
						Ruko Mega Grosir Cempaka Mas Blok I No.51, Jalan Sumur
						Batu, Kecamatan Kemayoran, Jakarta Pusat
					</p>
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Contact Info
					</h3>
					<div className="flex flex-col gap-4 text-zinc-300">
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="mailto:team37.id@gmail.com"
						>
							<div className="email flex flex-row gap-4 text-base leading-6 font-normal">
								<Mail />
								<p>team37.id@gmail.com</p>
							</div>
						</Link>
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="https://api.whatsapp.com/send?phone=62812878722257"
						>
							<div className="phone flex flex-row gap-4">
								<Phone />
								<p>+62 812-8787-2257</p>
							</div>
						</Link>
					</div>
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Sitelinks
					</h3>
					<ul className="flex flex-col gap-4 text-zinc-300">
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="/about"
						>
							<li>About</li>
						</Link>
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="/services"
						>
							<li>Services</li>
						</Link>
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="/projects"
						>
							<li>Projects</li>
						</Link>
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="/blog"
						>
							<li>Blog</li>
						</Link>
						<Link
							className="hover:text-zinc-50 transition duration-300"
							href="/careers"
						>
							<li>Careers</li>
						</Link>
					</ul>
				</section>
				<section className="flex flex-col gap-6">
					<h3 className="text-lg leading-7 font-semibold text-white">
						Follow Us
					</h3>
					<div className="flex flex-col gap-6 md:gap-4 text-zinc-300">
						<div className="flex flex-row gap-4 md:gap-6">
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://instagram.com/team37.id"
							>
								<Instagram />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<TikTok />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://www.linkedin.com/company/team-37-id/"
							>
								<LinkedIn />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Facebook />
							</Link>
						</div>
						<div className="flex flex-row gap-4 md:gap-6">
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Twitter />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<YouTube />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Dribbble />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://github.com/Team37-ID"
							>
								<GitHub />
							</Link>
						</div>
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
