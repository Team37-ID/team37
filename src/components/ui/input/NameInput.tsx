"use client"

import { Input } from "@nextui-org/react"
import { ChangeEvent } from "react"

type Props = {
	placeholder: string
	label: string
	desc: string
	value?: string
	validationState?: "valid" | "invalid"
	errorMessage?: string | boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onValueChange?: (val: string) => void
}

const NameInput = ({
	placeholder,
	label,
	desc,
	value,
	validationState,
	errorMessage,
	onChange,
	onValueChange,
}: Props) => {
	return (
		<Input
			type="text"
			isRequired
			variant="underlined"
			placeholder={placeholder}
			label={label}
			description={desc}
			value={value}
			onValueChange={onValueChange}
			validationState={validationState}
			errorMessage={errorMessage}
			onChange={onChange}
		/>
	)
}

export default NameInput
