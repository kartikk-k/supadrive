import { ReadonlyURLSearchParams } from "next/navigation";


export default function getCurrentPath(searchParams: ReadonlyURLSearchParams) {

    if (searchParams.get('path') === null || searchParams.get('path') === '') return ''
    else if (searchParams.get('path')) return searchParams.get('path')!
    else return ''
}