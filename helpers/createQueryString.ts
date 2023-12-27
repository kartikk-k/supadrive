import { ReadonlyURLSearchParams } from "next/navigation"


const createQueryString = (value: string, searchParams: ReadonlyURLSearchParams) => {
    const params = new URLSearchParams(searchParams)
    const previousPath = params.get('path')

    const newPath = previousPath ? `${previousPath}/${value}` : value
    params.set('path', newPath)

    return params.toString()
}

export default createQueryString;