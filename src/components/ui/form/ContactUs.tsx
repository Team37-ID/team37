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
	Textarea,
} from "@nextui-org/react"
import services from "@/data/services.json"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, FormEvent, useMemo } from "react"
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
	const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState<boolean>(false)
	const [isPhoneNumFieldEmpty, setIsPhoneNumFieldEmpty] =
		useState<boolean>(false)
	const [isIdeaFieldEmpty, setIsIdeaFieldEmpty] = useState<boolean>(false)
	const [firstNameFormValue, setFirstNameFormValue] = useState<string>("")
	const [lastNameFormValue, setLastNameFormValue] = useState<string>("")
	const [emailFormValue, setEmailFormValue] = useState<string>("")
	const [phoneNumFormValue, setPhoneNumFormValue] = useState<string>("")
	const [ideaFormValue, setIdeaFormValue] = useState<string>("")
	const [isOverLimit, setIsOverLimit] = useState<boolean>(false)

	const handleFirstNameFormChange = (val: string) => {
		setFirstNameFormValue(val)
	}

	const handleLastNameFormChange = (val: string) => {
		setLastNameFormValue(val)
	}

	const handleEmailFormChange = (val: string) => {
		setEmailFormValue(val)
	}

	const handlePhoneNumFormChange = (val: string) => {
		setPhoneNumFormValue(val)
	}

	const emailValidation = useMemo(() => {
		const validateEmail = (val: string) =>
			emailFormValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
		if (emailFormValue === "") {
			return undefined
		}

		return validateEmail(emailFormValue) ? "valid" : "invalid"
	}, [emailFormValue])

	const phoneNumValidation = useMemo(() => {
		const validatePhoneNum = (val: string) =>
			phoneNumFormValue.match(/^\+[0-9]{1,4}[-s./0-9]*$/i)

		if (phoneNumFormValue === "") {
			return undefined
		}

		return validatePhoneNum(phoneNumFormValue) ? "valid" : "invalid"
	}, [phoneNumFormValue])

	const firstNameValidation = useMemo(() => {
		const charLimit = 100

		const isCharOverLimit = (val: string) => val.length > charLimit

		return isCharOverLimit(firstNameFormValue) ? "invalid" : "valid"
	}, [firstNameFormValue])

	const lastNameValidation = useMemo(() => {
		const charLimit = 100

		const isCharOverLimit = (val: string) => val.length > charLimit

		return isCharOverLimit(lastNameFormValue) ? "invalid" : "valid"
	}, [lastNameFormValue])

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		if (
			firstNameFormValue === "" &&
			lastNameFormValue === "" &&
			emailFormValue === "" &&
			phoneNumFormValue === ""
		) {
			setIsFirstNameFieldEmpty(true)
			setIsLastNameFieldEmpty(true)
			setIsEmailFieldEmpty(true)
			setIsPhoneNumFieldEmpty(true)
		} else {
			setIsFirstNameFieldEmpty(firstNameFormValue === "")
			setIsLastNameFieldEmpty(lastNameFormValue === "")
			setIsEmailFieldEmpty(emailFormValue === "")
			setIsPhoneNumFieldEmpty(phoneNumFormValue === "")
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
									isOverLimit ||
									isFirstNameFieldEmpty ||
									firstNameValidation === "invalid"
										? "invalid"
										: "valid"
								}
								errorMessage={
									(isOverLimit ||
										isFirstNameFieldEmpty ||
										firstNameValidation === "invalid") &&
									"Please enter a value! (Max 100 characters)"
								}
								color={
									isOverLimit ||
									isFirstNameFieldEmpty ||
									firstNameValidation === "invalid"
										? "danger"
										: "default"
								}
							/>
							<NameInput
								placeholder="Your last name"
								label="Last Name"
								desc="Ex: Doe"
								value={lastNameFormValue}
								onValueChange={handleLastNameFormChange}
								validationState={
									isOverLimit ||
									isLastNameFieldEmpty ||
									lastNameValidation === "invalid"
										? "invalid"
										: "valid"
								}
								color={
									isOverLimit ||
									isLastNameFieldEmpty ||
									lastNameValidation === "invalid"
										? "danger"
										: "default"
								}
								errorMessage={
									(isOverLimit ||
										isLastNameFieldEmpty ||
										lastNameValidation === "invalid") &&
									"Please enter a value! (Max 100 characters)"
								}
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<EmailInput
								color={
									emailValidation === "invalid" ||
									isOverLimit ||
									isEmailFieldEmpty
										? "danger"
										: "default"
								}
								onValueChange={handleEmailFormChange}
								value={emailFormValue}
								errorMessage={
									(emailValidation === "invalid" ||
										isOverLimit ||
										isEmailFieldEmpty) &&
									"Please enter a valid email! (Max 100 characters)"
								}
								validationState={
									emailValidation === "invalid" ||
									isOverLimit ||
									isEmailFieldEmpty
										? "invalid"
										: "valid"
								}
							/>
							<PhoneNumInput
								color={
									phoneNumValidation === "invalid" ||
									isOverLimit ||
									isPhoneNumFieldEmpty
										? "danger"
										: "default"
								}
								onValueChange={handlePhoneNumFormChange}
								value={phoneNumFormValue}
								errorMessage={
									(phoneNumValidation === "invalid" ||
										isOverLimit ||
										isPhoneNumFieldEmpty) &&
									"Please enter a valid number! (Max 100 characters)"
								}
								validationState={
									phoneNumValidation === "invalid" ||
									isOverLimit ||
									isPhoneNumFieldEmpty
										? "invalid"
										: "valid"
								}
							/>
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
						<Textarea
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
							isDisabled={
								firstNameFormValue === "" ||
								lastNameFormValue === "" ||
								emailFormValue === "" ||
								phoneNumFormValue === ""
									? true
									: false
							}
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
