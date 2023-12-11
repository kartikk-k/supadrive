import { ReadonlyURLSearchParams } from "next/navigation"


const createQueryString = (value: string, searchParams: ReadonlyURLSearchParams) => {
    const params = new URLSearchParams(searchParams)
    params.set('path', value)

    return params.toString()
}

export default createQueryString;