import RegisterForm from "@/components/Register"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <RegisterForm></RegisterForm>
    </div>
  )
}