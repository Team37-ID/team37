"use client"

import { Input } from "@nextui-org/react"
import { useMemo, useState } from "react"

const EmailInput = () => {
	const [value, setValue] = useState("")

	const validationState = useMemo(() => {
		const validateEmail = (val: string) =>
			value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
		if (value === "") {
			return undefined
		}

		return validateEmail(value) ? "valid" : "invalid"
	}, [value])

	return (
		<>
			<Input
				type="email"
				isRequired
				variant="underlined"
				placeholder="johndoe@example.com"
				label="Email"
				description="We'll never share your email with anyone else."
				color={validationState === "invalid" ? "danger" : "default"}
				errorMessage={
					validationState === "invalid" &&
					"Please enter a valid email"
				}
				validationState={validationState}
				value={value}
				onValueChange={setValue}
			/>
		</>
	)
}

export default EmailInput
