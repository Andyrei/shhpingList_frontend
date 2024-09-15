
import LoginForm from "@/components/LogIn"


export default async function page() {

  // const session = await getSession()

  return (
   <div className="min-h-screen flex items-center justify-center w-full">
      <LoginForm></LoginForm>
   </div>
  )
}