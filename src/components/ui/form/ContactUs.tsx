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
} from "@nextui-org/react"
import services from "@/data/services.json"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, FormEvent } from "react"
const NameInput = dynamic(() => import("@/components/ui/input/NameInput"))
const EmailInput = dynamic(() => import("@/components/ui/input/EmailInput"))
const PhoneNumInput = dynamic(
	() => import("@/components/ui/input/PhoneNumInput")
)

type Props = {
	onClose: () => void
}

const ContactUs = ({ onClose }: Props) => {
	const [isFirstNameFieldEmpty, setIsFirstNameFieldEmpty] =
		useState<boolean>(false)
	const [isLastNameFieldEmpty, setIsLastNameFieldEmpty] =
		useState<boolean>(false)
	const [firstNameFormValue, setFirstNameFormValue] = useState<string>("")
	const [lastNameFormValue, setLastNameFormValue] = useState<string>("")
	const [isOverLimit, setIsOverLimit] = useState<boolean>(false)

	const handleFirstNameFormChange = (val: string) => {
		setFirstNameFormValue(val)
	}

	const handleLastNameFormChange = (val: string) => {
		setLastNameFormValue(val)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		if (firstNameFormValue === "" && lastNameFormValue === "") {
			setIsFirstNameFieldEmpty(true)
			setIsLastNameFieldEmpty(true)
		} else {
			setIsFirstNameFieldEmpty(firstNameFormValue === "")
			setIsLastNameFieldEmpty(lastNameFormValue === "")
		}
	}

	return (
		<>
			<ModalContent>
				<ModalHeader className="flex flex-col items-center text-3xl">
					Contact us
				</ModalHeader>
				<ModalBody>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col md:flex-row gap-4">
							<NameInput
								placeholder="Your first name"
								label="First Name"
								desc="Ex: John"
								value={firstNameFormValue}
								onValueChange={handleFirstNameFormChange}
								validationState={
									isOverLimit || isFirstNameFieldEmpty
										? "invalid"
										: "valid"
								}
								errorMessage={
									(isOverLimit || isFirstNameFieldEmpty) &&
									"Please enter a value! (Max 100 characters)"
								}
							/>
							<NameInput
								placeholder="Your last name"
								label="Last Name"
								desc="Ex: Doe"
								value={lastNameFormValue}
								onValueChange={handleLastNameFormChange}
								validationState={
									isOverLimit || isLastNameFieldEmpty
										? "invalid"
										: "valid"
								}
								errorMessage={
									(isOverLimit || isLastNameFieldEmpty) &&
									"Please enter a value! (Max 100 characters)"
								}
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
								label="Company Name (optional)"
								description="Ex: Google, Vercel, etc."
							/>
							<Input
								type="text"
								variant="underlined"
								placeholder="Software engineer"
								label="Job Title (optional)"
								description="Ex: CEO, Software Engineer, etc."
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
						<Button
							size="lg"
							color="primary"
							radius="sm"
							onClick={handleSubmit}
						>
							Submit Form
						</Button>
					</div>
				</ModalFooter>
			</ModalContent>
		</>
	)
}

export default ContactUs
