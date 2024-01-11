import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sxebraqcnjgvfqdbvtvh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZWJyYXFjbmpndmZxZGJ2dHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5Mzk0MjYsImV4cCI6MjAyMDUxNTQyNn0.aFE7qvxp63FySRbOLTnb1hT5zBm_UyHflZqDu2yUSpI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase