"use client"

import { Input } from "@nextui-org/react"
import { useMemo, useState } from "react"

const PhoneNumInput = () => {
	const [value, setValue] = useState("")

	const validationState = useMemo(() => {
		const validatePhoneNum = (val: string) =>
			value.match(/^\+[0-9]{1,4}[-s./0-9]*$/i)
		if (value === "") {
			return undefined
		}

		return validatePhoneNum(value) ? "valid" : "invalid"
	}, [value])

	return (
		<>
			<Input
				type="text"
				isRequired
				variant="underlined"
				placeholder="+6281212345678"
				label="Phone Number"
				description="Hint: Use your country code in front of the number"
				color={validationState === "invalid" ? "danger" : "default"}
				errorMessage={
					validationState === "invalid" &&
					"Please enter a valid number"
				}
				validationState={validationState}
				value={value}
				onValueChange={setValue}
			/>
		</>
	)
}

export default PhoneNumInput
