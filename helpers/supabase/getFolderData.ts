import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

const getFolderDataFromDatabase = async (path: string) => {

    const { data, error } = await supabase
        .from('objects')
        .select('*')
        .eq('path', `/${path}`)
        .single()


    if (error) console.log(error)
    else console.log(data)

    return { data, error }
}

export default getFolderDataFromDatabase