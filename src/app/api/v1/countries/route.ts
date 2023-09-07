import { NextResponse } from "next/server"
import NextSupabase from "@/app/supabase/supabase"

export async function GET(request: NextResponse) {
	try {
		const { data, error } = await NextSupabase.from("country").select("*")
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
				error: "No data available00000",
			})
		}

		return NextResponse.json({ length, data })
	} catch (err) {
		console.log("Internal server error: ", err)
		return NextResponse.json({ error: "An internal server error occured." })
	}
}
