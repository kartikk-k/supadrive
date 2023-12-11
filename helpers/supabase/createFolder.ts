import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

const createFolder = async (name: string, path: string) => {

    const { data, error } = await supabase.from('folders').insert([
        { name, path }
    ]).select('*')

    return { data, error }
}

export default createFolder