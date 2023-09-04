import { Modal, useDisclosure } from "@nextui-org/react"
import ContactUs from "@/components/ui/form/ContactUs"

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
					<ContactUs onClose={onClose} />
				</Modal>
			</div>
		</div>
	)
}

export default ButtonCta
