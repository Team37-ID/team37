import { NextResponse } from "next/server"
import NextSupabase from "@/app/supabase/supabase"

export async function GET(request: NextResponse) {
	try {
		const totalCountry = 241
		const { searchParams } = new URL(request.url)
		let limit = Number(searchParams.get("limit")) || 20
		let offset = Number(searchParams.get("offset")) || 0

		// Validate and set default values for limit and offset
		if (Number.isNaN(limit) || limit <= 0) {
			limit = 20
		}

		if (Number.isNaN(offset) || offset < 0) {
			offset = 0
		} else {
			offset = Math.min(offset, 241)
		}

		const nextOffset = offset + limit
		const prevOffset = offset - limit
		const next =
			nextOffset > totalCountry
				? null
				: `https://team37.co/api/v1/countries?offset=${nextOffset}&limit=${limit}`
		let previous =
			offset === 0
				? null
				: `https://team37.co/api/v1/countries?offset=${prevOffset}&limit=${limit}`
		const { data, error } = await NextSupabase.from("country")
			.select("*")
			.range(limit as number, (offset as number) - 1)
		const length = data?.length

		if (error) {
			console.log("Supabase error: ", error.message)
			return NextResponse.json({
				error: "An error occured while fetching data",
			})
		}

		if (!data) {
			console.log("No data found in Supabase")
			return NextResponse.json({
				error: "No data available",
			})
		}

		return NextResponse.json({
			totalCountry,
			length,
			next,
			previous,
			data,
		})
	} catch (err) {
		console.log("Internal server error: ", err)
		return NextResponse.json({ error: "An internal server error occured." })
	}
}
