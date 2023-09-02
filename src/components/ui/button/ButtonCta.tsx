import {
	Modal,
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
} from "@nextui-org/react"
import React from "react"
import EmailInput from "../input/EmailInput"

interface Props {
	children: React.ReactNode
}

const ButtonCta = ({ children }: Props) => {
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

	return (
		<div className="relative">
			<div className="inset-0 bg-gradient-to-r p-1 mx-auto from-blue-500 to-[#8B5CF6] rounded-xl">
				<button
					onClick={onOpen}
					className="bg-zinc-800 text-white px-4 py-2 rounded-lg inline-flex justify-center items-center font-medium text-base leading-4 md:text-lg md:leading-7 transition duration-300 drop-shadow-glow-sm hover:transition hover:duration-300 hover:drop-shadow-glow-lg hover:bg-zinc-900"
				>
					{children}
				</button>
				<Modal
					isOpen={isOpen}
					backdrop="blur"
					onOpenChange={onOpenChange}
					placement="auto"
					isDismissable={false}
					scrollBehavior="inside"
					size="xl"
				>
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
								<div>
									<EmailInput />
								</div>
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
								By submitting this form, I confirm that I have
								read and understood the
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
				</Modal>
			</div>
		</div>
	)
}

export default ButtonCta
