
import LoginForm from "@/components/authentication-02"

type Props = {}

export default function page({}: Props) {
  return (
   <div className="min-h-screen flex items-center justify-center w-full">
      <LoginForm></LoginForm>
   </div>
  )
}