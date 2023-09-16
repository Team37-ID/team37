"use client"

import { Input } from "@nextui-org/react"
import { useMemo, useState, ChangeEvent } from "react"

type Props = {
	color?: "default" | "primary" | "success" | "warning" | "danger" | undefined
	value?: string
	validationState?: "valid" | "invalid"
	errorMessage?: string | boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onValueChange?: (val: string) => void
}
const EmailInput = ({
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
				type="email"
				isRequired
				variant="underlined"
				placeholder="johndoe@example.com"
				label="Email"
				description="We'll never share your email with anyone else."
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

export default EmailInput
