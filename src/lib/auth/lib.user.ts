import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const key = new TextEncoder().encode(process.env.SECRET_JWT_KEY as string)

async function encrypt(payload: any){
    return await new SignJWT(payload)
    .setProtectedHeader({alg: process.env.ALGORITHM as string})
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}
async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: [process.env.ALGORITHM as string],
    })

    return payload
}

export async function login(formdata: FormData){

    // verify credential and get the user
    const user ={email: formdata.get("email")}

    // create the session
    const expires = new Date(Date.now() + 10 * 1000)
    const session = await encrypt({user, expires})

    // save session into the cookie
    cookies().set("session", session, {expires, httpOnly: true})
}

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value
    if(!session) return null
    return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
    const session = cookies().get("session")?.value

    if(!session) return

    const parsed = await decrypt(session)

    parsed.expires = new Date(Date.now() + 10 * 1000)

    const res = NextResponse.next()
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires
    })

    return res

}