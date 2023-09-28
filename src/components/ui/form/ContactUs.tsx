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

// Import dynamic input components
const NameInput = dynamic(() => import("@/components/ui/input/NameInput"))
const EmailInput = dynamic(() => import("@/components/ui/input/EmailInput"))
const PhoneNumInput = dynamic(
	() => import("@/components/ui/input/PhoneNumInput")
)

type Props = {
	onClose: () => void
}

const ContactUs = ({ onClose }: Props) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNum: "",
		idea: "",
	})

	const [formErrors, setFormErrors] = useState({
		firstName: false,
		lastName: false,
		email: false,
		phoneNum: false,
		idea: false,
	})

	const requiredFields: (keyof typeof formData)[] = [
		"firstName",
		"lastName",
		"email",
		"phoneNum",
		"idea",
	]

	const handleFormChange = (field: keyof typeof formData, value: string) => {
		setFormData({ ...formData, [field]: value })
	}

	const emailValidation = useMemo(() => {
		const validateEmail = (val: string) =>
			val.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

		if (formData.email === "") {
			return undefined
		}

		return validateEmail(formData.email) ? "valid" : "invalid"
	}, [formData.email])

	const phoneNumValidation = useMemo(() => {
		const validatePhoneNum = (val: string) =>
			val.match(/^\+[0-9]{1,4}[-s./0-9]*$/i)

		if (formData.phoneNum === "") {
			return undefined
		}

		return validatePhoneNum(formData.phoneNum) ? "valid" : "invalid"
	}, [formData.phoneNum])

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const newFormErrors = requiredFields.reduce(
			(errors, field) => {
				if (formData[field].trim() === "") {
					return { ...errors, [field]: true }
				}
				return errors
			},
			{ ...formErrors }
		)

		setFormErrors(newFormErrors)

		if (!Object.values(newFormErrors).some((error) => error)) {
			// Submit the form or perform other actions
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
								value={formData.firstName}
								onValueChange={(val) =>
									handleFormChange("firstName", val)
								}
								validationState={
									formErrors.firstName ? "invalid" : "valid"
								}
								errorMessage={
									formErrors.firstName &&
									"Please enter a value! (Max 100 characters)"
								}
								color={
									formErrors.firstName ? "danger" : "default"
								}
							/>
							<NameInput
								placeholder="Your last name"
								label="Last Name"
								desc="Ex: Doe"
								value={formData.lastName}
								onValueChange={(val) =>
									handleFormChange("lastName", val)
								}
								validationState={
									formErrors.lastName ? "invalid" : "valid"
								}
								errorMessage={
									formErrors.lastName &&
									"Please enter a value! (Max 100 characters)"
								}
								color={
									formErrors.lastName ? "danger" : "default"
								}
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<EmailInput
								color={
									emailValidation === "invalid" ||
									formErrors.email
										? "danger"
										: "default"
								}
								onValueChange={(val) =>
									handleFormChange("email", val)
								}
								value={formData.email}
								errorMessage={
									(emailValidation === "invalid" ||
										formErrors.email) &&
									"Please enter a valid email!"
								}
								validationState={
									emailValidation === "invalid" ||
									formErrors.email
										? "invalid"
										: "valid"
								}
							/>
							<PhoneNumInput
								color={
									phoneNumValidation === "invalid" ||
									formErrors.phoneNum
										? "danger"
										: "default"
								}
								onValueChange={(val) =>
									handleFormChange("phoneNum", val)
								}
								value={formData.phoneNum}
								errorMessage={
									(phoneNumValidation === "invalid" ||
										formErrors.phoneNum) &&
									"Please enter a valid number!"
								}
								validationState={
									phoneNumValidation === "invalid" ||
									formErrors.phoneNum
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
							value={formData.idea}
							onValueChange={(val) =>
								handleFormChange("idea", val)
							}
							validationState={
								formErrors.idea ? "invalid" : "valid"
							}
							color={formErrors.idea ? "danger" : "default"}
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
								Object.values(formErrors).some(
									(error) => error
								) ||
								requiredFields.some(
									(field) => formData[field].trim() === ""
								)
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
