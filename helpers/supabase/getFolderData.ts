import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

const getFolderDataFromDatabase = async (path: string) => {

    const { data, error } = await supabase
        .from('folders')
        .select('*')
        .eq('path', `/${path}`)


    if (error) console.log(error)
    else console.log(data)

    return { data, error }
}

export default getFolderDataFromDatabase