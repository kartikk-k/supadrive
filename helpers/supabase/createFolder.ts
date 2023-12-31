import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

const createFolder = async (name: string, path: string) => {

    const type = 'FOLDER'

    const { data, error } = await supabase.from('objects').insert([
        { name, path, type }
    ]).select('*')

    return { data, error }
}

export default createFolder