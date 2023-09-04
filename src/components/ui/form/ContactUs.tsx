"use client"

import {
	ModalBody,
	ModalContent,
	ModalHeader,
	Input,
	useDisclosure,
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
import dynamic from "next/dynamic"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRef } from "react"
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll"
const EmailInput = dynamic(() => import("@/components/ui/input/EmailInput"))
const PhoneNumInput = dynamic(
	() => import("@/components/ui/input/PhoneNumInput")
)

const ContactUs = () => {
	const { onClose } = useDisclosure()
	// TODO: Instructions below!
	// Create a custom hooks name useCountryList() and use it here
	// Use the hook to get the list of countries from the countries.json file
	// Apply the value to the useInfiniteScroll() hook
	const [, infiniteScrollRef] = useInfiniteScroll({
		hasMore: true,
		onLoadMore: () => {
			console.log("load more")
		},
		shouldUseLoader: false,
	})
	const scrollerRef = useRef<HTMLElement>(null)
	const virtualizer = useVirtualizer({
		count: countries.length,
		getScrollElement: () => scrollerRef.current,
		estimateSize: () => 35,
		// The overscan use to render the items outside the viewport
		// Expected behavior: virtualizer will load more items as it scrolls down
		overscan: 10,
	})

	const virtualItems = virtualizer.getVirtualItems()
	const totalSize = virtualizer.getTotalSize()

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
							items={countries}
							label="Which country do you come from?"
							variant="underlined"
							scrollRef={scrollerRef}
							placeholder="Select your country"
							style={{ height: `${totalSize}` }}
						>
							{virtualItems.map((virtualItem) => {
								const countryItem = countries[virtualItem.index]
								return (
									<SelectItem
										key={`${virtualItem.key}`}
										textValue={countryItem.en}
										startContent={
											<Avatar
												alt={countryItem.en}
												className="w-6 h-6"
												src={`https://flagcdn.com/${countryItem.alpha2}.svg`}
											/>
										}
									>
										{countryItem.en}
									</SelectItem>
								)
							})}
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
