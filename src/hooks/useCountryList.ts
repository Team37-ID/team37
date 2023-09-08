import { Country, UseCountryListProps } from "@/types/types"
import { useEffect, useState } from "react"

export const useCountryList = ({
	fetchDelay = 0,
}: UseCountryListProps = {}) => {
	const [items, setItems] = useState<Country[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [offset, setOffset] = useState(0)
	const limit = 20

	const loadCountry = async (currentOffset: number) => {
		const controller = new AbortController()
		const { signal } = controller

		try {
			setIsLoading(true)

			if (offset > 0)
				await new Promise((resolve) => setTimeout(resolve, fetchDelay))

			let res = await fetch(
				`https://team37.co/api/v1/countries?offset=${currentOffset}&limit=${limit}`,
				{ signal }
			)

			if (!res.ok) throw new Error("Network response was not ok")

			let json = await res.json()

			setHasMore(json.next !== null)

			setItems((prevItems) => [...prevItems, ...json.results])
		} catch (err: any) {
			if (err.name === "AbortError") console.log("Fetch aborted")
			else console.error("Error:", err.message)
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		loadCountry(offset)
	}, [loadCountry])

	const onLoadMore = () => {
		const newOffset = offset + limit

		setOffset(newOffset)
		loadCountry(newOffset)
	}

	return { items, hasMore, isLoading, onLoadMore }
}
