import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

const createFile = async (name: string, path: string) => {

    const type = 'FILE'


    const { data, error } = await supabase.from('objects').insert([
        { name, path, type }
    ]).select('*')

    return { data, error }
}

export default createFile