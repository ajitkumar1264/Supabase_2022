import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://filjnazecwpzqqslkkoj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbGpuYXplY3dwenFxc2xra29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0ODA5OTksImV4cCI6MTk4MTA1Njk5OX0.jkQEnk9JqGpmO7PxUBw0IL0QF6xsu-zufqjy9d8QP20"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;