"use client"

import { Input } from "@nextui-org/react"
import { ChangeEvent, useMemo, useState } from "react"

type Props = {
	color?: "default" | "primary" | "success" | "warning" | "danger" | undefined
	value?: string
	validationState?: "valid" | "invalid"
	errorMessage?: string | boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onValueChange?: (val: string) => void
}

const PhoneNumInput = ({
	color,
	value,
	validationState,
	errorMessage,
	onChange,
	onValueChange,
}: Props) => {
	return (
		<>
			<Input
				type="text"
				isRequired
				variant="underlined"
				placeholder="+6281212345678"
				label="Phone Number"
				description="Hint: Use your country code in front of the number"
				color={color}
				errorMessage={errorMessage}
				validationState={validationState}
				value={value}
				onChange={onChange}
				onValueChange={onValueChange}
			/>
		</>
	)
}

export default PhoneNumInput
