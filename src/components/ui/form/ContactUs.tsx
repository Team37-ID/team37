"use client"

import {
	ModalBody,
	ModalContent,
	ModalHeader,
	Input,
	RadioGroup,
	Radio,
	ModalFooter,
	Button,
	Link,
	Select,
	SelectItem,
	Avatar,
} from "@nextui-org/react"
import countries from "@/data/countries.json"
import services from "@/data/services.json"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRef, useState } from "react"
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll"
import { useCountryList } from "@/hooks/useCountryList"
const EmailInput = dynamic(() => import("@/components/ui/input/EmailInput"))
const PhoneNumInput = dynamic(
	() => import("@/components/ui/input/PhoneNumInput")
)

type Props = {
	onClose: () => void
}

const ContactUs = ({ onClose }: Props) => {
	// const [isOpen, setIsOpen] = useState(false)
	// const { items, hasMore, isLoading, onLoadMore } = useCountryList({
	// 	fetchDelay: 1500,
	// })

	// const [, scrollerRef] = useInfiniteScroll({
	// 	hasMore,
	// 	isEnabled: isOpen,
	// 	shouldUseLoader: false,
	// 	onLoadMore,
	// })

	return (
		<>
			<ModalContent>
				<ModalHeader className="flex flex-col items-center text-3xl">
					Contact us
				</ModalHeader>
				<ModalBody>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col md:flex-row gap-4">
							<Input
								type="text"
								isRequired
								variant="underlined"
								placeholder="Your first name"
								label="First Name"
								description="Ex: John"
							/>
							<Input
								type="text"
								isRequired
								variant="underlined"
								placeholder="Your last name"
								label="Last Name"
								description="Ex: Doe"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<EmailInput />
							<PhoneNumInput />
						</div>
						<Select
							items={services}
							label="What service can we help you?"
							variant="underlined"
							placeholder="Development, Design, Security, etc.."
						>
							{(service) => (
								<SelectItem
									key={`${service.id}`}
									textValue={service.name}
								>
									<div className="flex flex-row gap-4 items-middle align-middle">
										<Image
											src={service.logo}
											alt={service.name}
											width={service.width}
											height={service.height}
											className="flex align-middle justify-center items-center"
										/>
										<div className="flex flex-col">
											<p className="text-sm font-medium text-white">
												{service.name}
											</p>
											<p className="text-xs font-light text-gray-400">
												{service.desc}
											</p>
										</div>
									</div>
								</SelectItem>
							)}
						</Select>
						<RadioGroup
							label="Project Type"
							orientation="horizontal"
							defaultValue="personal"
							isRequired
						>
							<Radio value="personal">Personal</Radio>
							<Radio value="corporate">Corporate</Radio>
						</RadioGroup>
						<div className="flex flex-col md:flex-row gap-4">
							<Input
								type="text"
								variant="underlined"
								placeholder="Team 37"
								label="Company Name"
								description="Optional"
							/>
							<Input
								type="text"
								variant="underlined"
								placeholder="Software engineer"
								label="Job Title"
								description="Optional"
							/>
						</div>
						<Input
							type="text"
							isRequired
							variant="underlined"
							placeholder="Describe about your idea"
							label="What is your idea?"
							description="Ex: Business opportunity, partnership, etc."
						/>
					</div>
				</ModalBody>
				<ModalFooter className="flex flex-col gap-8">
					<span className="text-xs text-center">
						By submitting this form, I confirm that I have read and
						understood the
						<Link
							href="/"
							showAnchorIcon
							underline="hover"
							color="primary"
							className="text-xs text-center"
						>
							Team 37 Privacy Statement.
						</Link>
					</span>
					<div className="flex flex-row gap-4 items-end justify-center">
						<Button
							size="lg"
							color="danger"
							radius="sm"
							variant="ghost"
							onPress={onClose}
						>
							Close
						</Button>
						<Button size="lg" color="primary" radius="sm">
							{/* TODO: Add submit form event */}
							Submit Form
						</Button>
					</div>
				</ModalFooter>
			</ModalContent>
		</>
	)
}

export default ContactUs
