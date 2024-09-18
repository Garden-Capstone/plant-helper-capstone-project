import {headers as incomingHeaders} from "next/dist/client/components/headers";
import { cookies } from 'next/headers'
import {getSession} from "@/utils/session.utils";

export async function setHeaders() {
    const headers = new Headers()
    const session =  await getSession()

    if(session?.authorization) {
        headers.append("authorization", session?.authorization)
    }

    // @ts-ignore
    for (const pair of incomingHeaders().entries()) {
        headers.append(pair[0], pair[1])
    }
    return headers
}