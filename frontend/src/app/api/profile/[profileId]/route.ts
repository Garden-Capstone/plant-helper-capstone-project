import {cookies} from "next/headers";
import {getSession} from "@/utils/session.utils";


export async function PUT(req: Request, {params: {profileId}}: {params: {profileId: string}}) {
    const body = await req.json()

    const session = await getSession()

    const responseFromServer = await fetch(`${process.env.REST_API_URL}/apis/profile/${profileId}`,
        {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "authorization": session?.authorization ?? "",
                "Cookie": cookies().toString()
            },
            body: JSON.stringify(body)
        }
    )

    const authorization = responseFromServer.headers.get("authorization")

    if (authorization) {
        console.log("authorization", authorization)
        const cookieJar = cookies()
        cookieJar.delete("jwt-token")
        cookieJar.set("jwt-token", authorization, {path: "/", sameSite:"strict", httpOnly: true, maxAge:10_800})
    }

    return responseFromServer
}

export async function GET(request: Request) {
    return Response.json({message: "Hello World"})
}