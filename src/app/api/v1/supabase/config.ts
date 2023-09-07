import { createClient } from "@supabase/supabase-js"

const NextSupabase = createClient(
	"https://kduvaloyoviwoksflvfu.supabase.co",
	process.env.SUPABASE_PUBLIC_ANON_KEY || ""
)

export default NextSupabase
