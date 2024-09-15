
import LoginForm from "@/components/LogIn"
import { getSession } from "@/lib/auth/lib.user"


export default async function page() {

  const session = await getSession()

  return (
   <div className="min-h-screen flex items-center justify-center w-full">
      <LoginForm></LoginForm>

       <pre>{JSON.stringify(session, null, 2)}</pre>
   </div>

   
  )
}