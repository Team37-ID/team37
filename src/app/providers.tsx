// app/providers.tsx
"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={false}
			>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	)
}
